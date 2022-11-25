var url = window.location.href;
var urlObj = new URL(url);
var url_cliente_empresa = urlObj.searchParams.get("cliente")
var formulario = document.getElementById('form')
     

        if(url_cliente_empresa === 'empresa'){

              formulario.innerHTML = ` 
              <form action="./usuarioDivulgacao.html">
                <div class="inputBox-1">
                            <input type="text" value="PREMIUM DOG PETSHOP" required="required">
                            <span class="spans">Seu Nome ou do Seu Negócio</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="CNPJ">
                            <span class="spans">CNPJ</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="Inscrição Estadual">
                            <span class="spans">Inscrição Estadual</span>
                        </div>


                        <div class="inputBox-1">
                            <input type="email" value="paulo@eu.com" required="required">
                            <span class="spans">E-mail</span>
                        </div>


                        <div class="inputBox-1">
                            <input type="Logradouro" value="Avenida Barão do Rio Branco, 2593" required="required">
                            <span class="spans">Logradouro</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="Bairro" value="Centro" required="required">
                            <span class="spans">Bairro</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="CEP" value=" 36010-907" required="required">
                            <span class="spans">CEP</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="Cidade" value="Juiz de Fora" required="required">
                            <span class="spans">Cidade</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="UF" value="Minas Gerais" required="required">
                            <span class="spans">UF</span>
                        </div>

                        <div class="inputBox-1">
                            <input type="Telefone" value="3333-4444" required="required">
                            <span class="spans">Telefone</span>
                        </div>
                        <div class="inputBox-1">
                            <label for="descricao" class="spans">Faça uma breve descrição do seu negócio</label><br>
                            <textarea id="descricao" required="required"> Compre Online e Receba em Horas, ração Frete Grátis Brasil* 
                        e Parcele em até 3x Sem Juros. Cobasi Já: Compre Online e Receba 
                        em Horas.

                            </textarea>
                        </div>

                        <div class="inputBox-2">
                            <input type="submit" onclick="saveData()" value="Atualizar">
                        </div>
                        </div>
                </form>`
        }else{
            formulario.innerHTML = ` 
            <form action="./userProfile.html">
                <div class="inputBox-1">
                    <input type="text" value="PREMIUM DOG PETSHOP">
                    <span class="spans">Nome</span>
                </div>

               
                <div class="inputBox-1">
                    <input type="email" value="paulo@eu.com">
                    <span class="spans">E-mail</span>
                </div>


                <div class="inputBox-1">
                    <input type="Logradouro" value="Avenida Barão do Rio Branco, 2593">
                    <span class="spans">Logradouro</span>
                </div>

                <div class="inputBox-1">
                    <input type="Bairro" value="Centro">
                    <span class="spans">Bairro</span>
                </div>

                <div class="inputBox-1">
                    <input type="CEP" value=" 36010-907">
                    <span class="spans">CEP</span>
                </div>

                <div class="inputBox-1">
                    <input type="Cidade" value="Juiz de Fora">
                    <span class="spans">Cidade</span>
                </div>

                <div class="inputBox-1">
                    <input type="UF" value="Minas Gerais">
                    <span class="spans">UF</span>
                </div>

                <div class="inputBox-1">
                    <label for="descricao" class="spans">Faça uma breve descrição do seu negócio</label><br>
                    <textarea id="descricao"> Compre Online e Receba em Horas, ração Frete Grátis Brasil* 
                e Parcele em até 3x Sem Juros. Cobasi Já: Compre Online e Receba 
                em Horas.

                    </textarea>
                </div>

                <div class="inputBox-2">
                    <input type="submit" onclick="saveData()" value="Atualizar">
                </div>
                </div>
                </form>`
                
          }
