import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');

        $(this[i]).click(e => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElements = document.querySelectorAll('[modal-close]');
    closeElements.forEach(element => {
        $(element).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            const modal = document.querySelector('.modal-js');
            if (modal) {                
                document.body.removeChild(modal);
            }
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            const modal = document.querySelector('.modal-js');
            if (modal) {                
                document.body.removeChild(modal);
            }
        }
    });
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i <this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal', 'modal-js');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];

        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.textContent = btns.settings[j][0];
            btn.classList.add('btn', ...btns.settings[j][1]);
            if (btns.settings[j][2]) {
                btn.setAttribute('modal-close', 'true');
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <button class="close" modal-close>
                        <span>&times;</span>
                    </button>

                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>

                    <div class="modal-body">
                        ${text.body}
                    </div>

                    <div class="modal-footer">
                        
                    </div>

                </div>
            </div>
        </div>
        `;
        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal();
        $(this[i].getAttribute('data-target')).fadeIn(300);
    }
};
