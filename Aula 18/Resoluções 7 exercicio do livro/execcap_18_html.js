<doctype html>

    <textarea id="code">return "Olá";</textarea>
    <button id="button">Run</button>
    <pre id="output"></pre>
    
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            let code = document.querySelector("#code").value;
            let output = document.querySelector("#output");
            try {
                let returned = Function(code)(); 
                output.innerText = String(returned);
            }
            catch(error) {
                output.innerText('Error:', error);
            }
        })
     
    </script>
