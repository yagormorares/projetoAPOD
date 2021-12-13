$(".botaoGerador").click(function(){
    let APIurl = 'https://api.nasa.gov/planetary/apod?'
    let APIkey = 'api_key=2rBaP6gpzWRR82PEGmVW7UV0taElpN1UFu85nOJM&'
    let bruteData = $('#dateInput').val()
    let APIdata = "date="+String(bruteData)+"&"
    let APIurlFull =  APIurl + APIkey + APIdata
    $.ajax({
        url: APIurlFull,
        success: function(response) {
            console.log(response)
            //pegar hdurl, explanation, title,date
            let title = response["title"]
            let date = response["date"]
            let hdurl = response["hdurl"]
            let explanation = response["explanation"]
            
            $(".tituloAPI").text(title)
            $(".dataAPI").text(date)
            $(".imgAPI").attr("src",hdurl)
            $(".imgAPI").show()
            $(".explanationAPI").text(explanation)
            console.log(APIdata)
        },
        error:function(erro) {
            console.log(erro)
        }
    })
})