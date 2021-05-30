
  /* var primeiro_nome = document.getElementById("primeiro_nome");
    var datainicio = document.getElementById("datainicio");
    var terminolabel = document.getElementById("terminolabel");
    var duracao = document.getElementById("duracao");
    var descricao = document.getElementById("descricao")

    var dados = JSON.parse(localStorage.getItem('dadosform'));

    if (dados == null)
    {
        localStorage.setItem('dadosform', '[]')
        dados = [];
    }

    var  auxRegistro = 
    {
        nome: primeiro_nome.value,
        datainicio: datainicio.value,
        datatermino: terminolabel.value,
        duracao: duracao.value,
        descricao: descricao.value
    }

    dados.push(auxRegistro);

    localStorage.setItem('dadosform', JSON.stringify(dados));
    alert("Cadastro feito com sucesso!")*/

    class Validator {

        constructor()
        {
            this.validations = [
            'data-min-length',
            'data-max-length',
            'data-only-numbers',
            'data-required'

            ]
        }

        // iniciar a validação de todos os campos
        validate(form)
        {
            // pegar os inputs
            let inputs = form.getElementsByTagName( 'input');


            // HTMLCollection => array
            let inputsArray =[...inputs];

            inputsArray.forEach(function(input) 
            {
                for(let i = 0; this.validations.length > i; i++){
                    //verifica se a validação atual existe no input
                    if (input.getAttribute(this.validations[i]) != null){
                        
                        let method = this.validations[i].replace('data-', '').replace('-','');

                        let value = input.getAttribute(this.validations[i]);

                        this[method](input,value);
                        
                    }
                }
            }, this);
        }
        required(input) {

            let inputValue = input.value;
        
            if(inputValue === '') {
              let errorMessage = `Este campo é obrigatório`;
        
              this.printMessage(input, errorMessage);
            }
        
        }
    }



    

    let form = document.getElementsByClassName("fcadastro").value;
    let submit = document.getElementsByClassName("cadastroCurso").value;
    
    let validator = new Validator();

    submit.addEventListener('click', function(){
         e.preventDeFault();

         validator.validate(form);

    }
    );