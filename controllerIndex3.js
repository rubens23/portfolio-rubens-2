function openDrawer(){
    styleDrawer("100%", "fit-content")
    

}

function closeDrawer(){
    styleDrawer("0", "0")
}

function styleDrawer(width, height){
    document.getElementById("myDrawer").style.width = width;
    document.getElementById("myDrawer").style.height = height;
}

document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector('.btn-send-message');

    button.addEventListener('click', async (event)=>{
        event.preventDefault();

        const name = document.getElementById('input1').value;
        const email = document.getElementById('input2').value;
        const message = document.getElementById('input3').value;

        if(!name || !email || !message){
            alert('Por favor preencha todos os campos.');
            return;
        }

        try{
            const response = await fetch('https://backend-portfolio-44yi.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, message})
            });

            const result = await response.json();

            console.log(`response ${response.json.success}`)
            if(result.success){
                alert('Mensagem enviada com sucesso!');
                document.getElementById('input1').value = '';
                document.getElementById('input2').value = '';
                document.getElementById('input3').value = '';
            }else{
                console.error('Erro ao enviar a mensagem:', error);
                alert('Erro ao enviar a mensagem. Tente novamente.');
            }

        }catch(error){
            console.error('Erro ao enviar a mensagem: ', error);
            alert('Erro ao enviar a mensagem. Tente novamente.')
        }
    });

    function scrollToSection(targetId){
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    document.getElementById('about-me-btn').addEventListener('click', () => {
        scrollToSection('about-me');
    });

    document.getElementById('sessao-servicos-btn').addEventListener('click', () => {
        scrollToSection('sessao-servicos');
    });

    document.getElementById('orcamento-btn').addEventListener('click', () => {
        scrollToSection('orcamento');
    });

    document.getElementById('entrar-em-contato-comigo-btn').addEventListener('click', () => {
        scrollToSection('entrar-em-contato-comigo');
    });

    document.getElementById('btn-entre-em-contato-vamos-fazer-acontecer').addEventListener('click', () => {
        scrollToSection('id-bottom-contatos');
    });

    document.getElementById('btn-ver-portfolio').addEventListener('click', () => {
        scrollToSection('sessao-servicos');
    });

    document.getElementById('app-detail-button').addEventListener('click', () =>{
        console.log('botão show app details foi clicado')
        scrollToSection('videoDescription');
    });


});

function openVideo(appElement){

    console.log(`to aqui no openVideo ${appElement}`);

    var videoFile = appElement.getAttribute('data-video');
    var videoSrc = document.getElementById('videoSource');
    var videoDesc = document.getElementById('videoDescription');
    var appDetails = document.getElementById('app-detail-text');
    var appFeaturesList = document.getElementById('app-details-list');
    var videoElement = document.getElementById('appVideo');
    var appName = appElement.querySelector('p').textContent;

    videoSrc.src = videoFile;

    document.getElementById('videoModal').style.display = 'block';

    videoElement.load();
    videoElement.play();

    appFeaturesList.innerHTML = '';


    switch(appName){
        case 'App Dose Certa':
            videoDesc.textContent = appElement.querySelector('p').textContent;
            appDetails.textContent = appDetailsText['App Dose Certa'];
            appDetailsFeaturesList['App Dose Certa'].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic;
                appFeaturesList.appendChild(listItem);
                
            });
            break;
        case 'App Salon':
            videoDesc.textContent = appElement.querySelector('p').textContent;
            appDetails.textContent = appDetailsText['App Salon'];
            appDetailsFeaturesList['App Salon'].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic;
                appFeaturesList.appendChild(listItem);
                
            });
            break;
        case 'App Conecta Medicina':
            videoDesc.textContent = appElement.querySelector('p').textContent;
            appDetails.textContent = appDetailsText['App Conecta Medicina'];
            appDetailsFeaturesList['App Conecta Medicina'].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic;
                appFeaturesList.appendChild(listItem);
                
            });
            break;
        case 'App Descomplica Mudança':
            videoDesc.textContent = appElement.querySelector('p').textContent;
            appDetails.textContent = appDetailsText['App Descomplica Mudança'];
            appDetailsFeaturesList['App Descomplica Mudança'].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.textContent = topic;
                appFeaturesList.appendChild(listItem);
                
            });
            break;
    }

    videoDesc.textContent = appElement.querySelector('p').textContent;

    console.log(`conteudo do textContent ${appElement.querySelector('p').textContent}`);



    console.log(`Video source set to: ${videoSrc.src}`);


}

function closeModal(){
    var videoElement = document.getElementById('appVideo');

    videoElement.pause()
    videoElement.currentTime = 0;

    document.getElementById("videoModal").style.display = "none";

}

window.onclick = function(event){
    if(event.target == document.getElementById('videoModal')){
        closeModal();
    }
}

const appDetailsText ={
    'App Dose Certa': `
    Aplicativo que serve para as pessoas lembrarem
    dos horários dos medicamentos que elas estão tomando.
    O aplicativo conta com uma tela de detalhe para cada 
    medicamento onde a pessoa pode ver informações como horários das doses, 
    duração do tratamento, doses já tomadas além de um botão para ativar o 
    alarme de lembrete de medicamentos.
    `,
    'App Salon': `
    Salon Admin Premium é um aplicativo para android 
    que possibilita que funcionários e/ou administradores de um 
    salão de beleza, acompanhem todos os atendimentos marcados pelos 
    clientes no app do cliente(Salon Premium Client).
    `,
    'App Conecta Medicina': `
    conectaMedicina é um aplicativo para pessoas que desejam encontrar 
    médicos de diversas especialidades e agendar consultas. 
    Para isso damos ao usuário a possibilidade de utilizar um 
    chat para falar diretamente com o médico que tem interesse 
    em marcar consulta. O aplicativo possui outros recursos 
    interessantes, como notificações em tempo real.
    `,
    'App Descomplica Mudança': `
    DescomplicaMudança é um app essencial para uma transição 
    suave e organizada para o novo lar dos seus sonhos. 
    Com recursos que permitem controlar despesas e 
    receitas mensais, definir metas específicas para 
    cada custo da mudança, e oferecer dicas 
    especializadas de planejamento, o aplicativo 
    coloca você no comando total do planejamento 
    da sua mudança. Acompanhe o progresso, 
    veja quanto já economizou e transforme 
    a mudança em uma jornada tranquila e memorável.


    `
}

const appDetailsFeaturesList ={
    'App Dose Certa': [
        'Kotlin;',
        'Espresso;',
        'Navigation;',
        'Room;',
        'Dagger Hilt;',
        'viewModel;',
        'Fragments;',
        'SharedFlow;',
        'LiveData;',
        'viewBinding;',
        'DataStore.'
    ],
    'App Salon': [
        'Kotlin;',
        'ViewPager2;',
        'ViewModel;',
        'Fragments;',
        'SharedFlow;',
        'viewBinding;',
        'Dagger Hilt;',
        'Firebase Database;',
        'Firebase Storage.'
       
    ],
    'App Conecta Medicina': [
        'compose;',
        'kotlin;',
        'ktor;',
        'retrofit;',
        'ktor web sockets;',
        'firebase fcm;',
        'dagger hilt;',
        'MVVM;',
        'ktor web sockets;',
        'firebase fcm;',
        'dagger hilt.',
    ],
    'App Descomplica Mudança': [
        'Kotlin;',
        'Navigation;',
        'Dagger Hilt;',
        'viewModel;',
        'Fragments;',
        'SharedFlow;',
        'ViewBinding;',
        'WorkManager.'
    ]
}




