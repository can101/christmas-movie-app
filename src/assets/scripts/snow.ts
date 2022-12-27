export function snowGenerator() {
    let embedSnow = document.getElementById('embed--snow')
    if (!embedSnow) {
        function embRand(a: number, b: number): number {
            return Math.floor(Math.random() * (b - a + 1)) + a
        }

        // let embCSS = '.embed-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}'
        let embCSS = '.embed-snow{position: absolute;font-size:10px;color: white;border-radius: 50%;margin-top:-10px}'
        let embHTML = ''
        for (let i = 1; i < 90; i++) {
            // embHTML += '<i class="embed-snow"></i>'
            embHTML += '<i class="fa-solid fa-snowflake embed-snow"></i>'
            let rndX = (embRand(0, 1000000) * 0.0001),
                rndO = embRand(-100000, 100000) * 0.0001,
                rndT = (embRand(3, 8) * 10).toFixed(2),
                rndS = (embRand(0, 10000) * 0.0001).toFixed(2)
            embCSS += '.embed-snow:nth-child(' + i + '){' + 'opacity:' + (embRand(1, 10000) * 0.0001).toFixed(2) + ';' + 'transform:translate(' + rndX.toFixed(2) + 'vw,-10px) scale(' + rndS + ');' + 'animation:fall-' + i + ' ' + embRand(10, 30) + 's -' + embRand(0, 30) + 's linear infinite' + '}' + '@keyframes fall-' + i + '{' + rndT + '%{' + 'transform:translate(' + (rndX + rndO).toFixed(2) + 'vw,' + rndT + 'vh) scale(' + rndS + ')' + '}' + 'to{' + 'transform:translate(' + (rndX + (rndO / 2)).toFixed(2) + 'vw, 105vh) scale(' + rndS + ')' + '}' + '}'
        }
        embedSnow = document.createElement('div')
        embedSnow.id = 'embed--snow'
        embedSnow.innerHTML = '<style>#embed--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:999;pointer-events:none}' + embCSS + '</style>' + embHTML
        const root=document.querySelector('.App');
        root?.appendChild(embedSnow)
    }
}
