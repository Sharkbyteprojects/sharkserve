module.exports=(url)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SharkServe 404 ${url}</title>
    </head>
    <body>
        <h1>We can't find ${url}</h1>
        <p>Site powered by Sharkbyte</p>
    </body>
    </html>`;
}