const markdownIt = require('markdown-it')
const puppeteer = require('puppeteer')
const { JSDOM } = require('jsdom')
const _ = require('lodash')

const text = '## THE LAND（エルフの森）について \nTHE LAND（エルフの森）は、株式会社HashPalette（ハッシュパレット）が開発するNFTゲーム(ブロックチェーンゲーム)です。\nリリース直後はメンテナンス続きで快適にプレイすることが難しかったですが、最近は、筆者がプレイしている限りではサクサク進められるようになりましたのでご紹介させていただきます。\n\n以下では、無課金で稼ぐためにやることを記事にさせていただきます。\nある程度遊んでみて、課金を検討するのが良いと思います。\n\n### ショップで広告を見る\n以下のものが広告視聴でゲットできます。\n* 120EG(課金してゲットするコイン)\n* 240ハート(装飾を買うための通貨のような働き)\n* 箱詰め用木材1個(NFT化に使う)\n* 星の種1個\n* 星の粉1個※\n※星の粉は、記事執筆時点では広告で入手できましたが、公式Xで今後は入手できなくなる可能性がある旨アナウンスがありました。([参考](https://twitter.com/THELAND_ELF_JP/status/1768250143269421069?t=xQbvsoNn_W1_zTx6mrhSDw&s=19))\n画面上部の「ショップ」(お店のアイコン↓)から広告を見るとアイテムがもらえます。\n\n![Screenshot_20240316_153539_THE LAND.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356834237.jpg)\n!\n全て視聴する必要は無いと思いますが、星の種・星の粉・木材はゲームプレイでなかなか手に入らないので、手元にない場合には視聴をお勧めします！\nなお、作物を生産した際にも、まれに「星の種」を手に入れることがあります。\n\n### スタージャンボをゲットする\n\n広告視聴などでもらった星の種を畑に植えます。\n収穫すると、デイリーミッションの「星の作物を収集する」がクリアできるので、スタージャンボが受け取れます。（なお、星の粉をかけてから収穫するとラックがアップして以下で説明する星の作物の入手確率がUPします）\nこのスタージャンボは1週間に1度抽選があり、当たるとダイヤモンドの作物(100,000ELF=約100万円相当)がもらえます。※宝くじみたいなものです。\n過去、X上では、当選した方が当選ツイートをされていました。\nスタージャンボの保有枚数などは、PLT Place(NFTのマーケットプレイス、以下マケプレ)から確認できます。\n\n![Screenshot_20240229_160624_Chrome.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356948646.jpg)\n\n### 星の作物をELFと交換して稼ぐ\nこの「星の種」を育てると、「星の作物」やエルフシルバーを獲得できます。\n星の作物は毎回手に入るわけではなく、運が良いときに手に入ります。\n星の作物には、ダイヤモンド、金、銀、銅の4種類があり、先述のダイヤモンドの作物のみはスタージャンボの抽選を通じてのみ得ることができます\nそして、この「星の作物」は、エルフトークン（ELF）と交換することが可能です。\n\n* 作物→交換できるELFの量\nダイヤモンド作物（※スタージャンボの抽選のみ）→100,000ELF\n金の作物→8,000ELF\n銀の作物→800ELF\n銅の作物→8ELF\n\n### 招待コードを入力する\nゲームをある程度進めると、招待コードを入力する場面が出てくるので入力します。\nスキップもできて、その場合は、後からでも、画面上部の「握手マーク」からいつでも入力できます。\nチュートリアル完了後、下記の招待コードを入力すると、10エルフトークンがプレゼントされます。\n\n入力すると、お互い10エルフトークン(記事執筆時点で約120円相当)もらえるので、入れておきましょう！\n招待コード【JYZ7H5】、良ければお使いください。\n\n### 箱詰めNFTを売る\nPLTPlaceで集めた作物などを50個からまとめてNFT化して売れるので、無課金でもゲームを頑張って進めておきましょう。\n最低出品額は200円です。\n\n![Screenshot_20240229_161201_Chrome.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356958269.jpg)\n\n箱詰めする前に一手間かけて、マケプレで実際に売れているものを確認してから箱詰めした方が売れやすいと思います。（筆者は読みをことごとく外して、売れたためしがありません汗）\n\n![Screenshot_20240229_161400_Chrome.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711357177048.jpg)\n\n記事を書き始めた時点では、上の画像のとおり、採取に手間のかかる貝を50個箱詰めしたものが売れていました。\nしかし、すぐに300個箱詰めしないと売れないようになりました。\n\nまた、リンゴが様々な加工品の原料になるので、売れるかもと思い、箱詰めしましたが、これもまだ売れていません。\n\n![Screenshot_20240311_015707_Chrome.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356967199.jpg)\n\n\n**しっかり売るためには、頻繁にマケプレの売れ行きを確認し、また、今後何が売れそうかを推測する必要がある**ように思います。\n\n無事に売れれば、エルフトークン若しくはパレットトークン(PLT)を稼ぐことが可能です。\n\n以上、お金をかけずにプレイしてみる方法についてご紹介いたしました！\n王道の農場経営ゲームですので、楽しめる人が多いのではないかなと思います。\n\n### 参考サイト\n#### 使用されているチェーンについて\n[THE LAND エルフの森：公式サイト](https://theland.game/)\n[ハッシュパレットホワイトペーパー（PDF）](https://document.hashpalette.com/HashpalettePaper.pdf)\n[HashPalette（ハッシュパレット）公式サイト](https://hashpalette.com/)\n\n\n## Web3について更に知識をつけたい方へ\n当プラットフォームCLCでは**体系的に正しい知識**を皆様に身に着けてもらうべく情報発信をしています。\n是非Web3ゲームを入口として、CLC内のコンテンツを使いWeb3に関する様々な事柄について学習してみてください。\n**CLCでは体系的にWeb3のことが学べる[各種コース](https://cryptolearningclub.org/course?type=master)もご用意**しています。\n筆者自身もWeb3ゲームをプレイするばかりでしたが、その裏側にある技術がどうなっているか気になり、CLCで学習を進めています！\n皆様と一緒に知識をつけていければ良いなと思っておりますので、一緒に頑張りましょう！\n最後までお読みいただきありがとうございました。'

main = async (textContent) => {
    const htmlContent = generateHtmlContent(textContent)
    const segments = splitHtmlContent(htmlContent)
    const image = await generateImage(segments)
}

generateHtmlContent = (textContent) => {
    const md = markdownIt({
        html: true,
    })

    return md.render(textContent)
}

isRelevantHeading = (node) => {
    return ['H1', 'H2', 'H3', 'H4'].includes(node.tagName);
}

deleteImageTag = (htmlContent) => {
    const dom = new JSDOM(htmlContent);

    const images = dom.window.document.querySelectorAll('img')

    images.forEach(img => img.parentNode.removeChild(img));

    return dom.window.document.body.innerHTML;
}

deleteHrefTag = (htmlContent) => {
    const dom = new JSDOM(htmlContent);

    const hrefs = dom.window.document.querySelectorAll('a')

    hrefs.forEach(href => href.parentNode.removeChild(href));

    return dom.window.document.body.innerHTML;
}

splitHtmlContent = (htmlContent) => {
    const modifiedHtmlString = deleteImageTag(htmlContent);
    const modifiedHtmlString2 = deleteHrefTag(modifiedHtmlString);
    const dom = new JSDOM(modifiedHtmlString2);
    const segments = [];

    let  currentSegment = {heading: '', content: []};

    const elements = dom.window.document.querySelectorAll('h1,h2, h3, h4, p');
    elements.forEach(node => {
        if (isRelevantHeading(node)) {
            // Nếu đang có phân đoạn đang được xây dựng, đẩy nó vào mảng và bắt đầu một phân đoạn mới
            if (currentSegment.heading) {
                segments.push(currentSegment);
                currentSegment = {heading: '', content: []};
            }
            currentSegment.heading = node.outerHTML;
        } else {
            // Thêm nội dung vào phân đoạn hiện tại
            currentSegment.content.push(node.outerHTML);
        }
    });

    // Đừng quên thêm phân đoạn cuối cùng vào mảng
    if (currentSegment.heading) {
        segments.push(currentSegment);
    }

    return segments
}

generateImage = async (segments) => {
    _.map(segments, async (segment) => {
        const segmentHeading = segment.heading;
        const segmentContent = segment.content.join('');
        await renderPuppeteer({
            segmentHeading,
            segmentContent
        })
    })
}

renderPuppeteer = async ({
    segmentHeading,
    segmentContent
}) => {
    // Launch the browser and open a new blank page
    const html = `<html><body>${segmentHeading}${segmentContent}</body></html>`
    console.log(html)
    console.log('html')

    const now = new Date().getTime();
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setContent(html, {
        timeout: 3000000,
        waitUntil: 'load',
    })
    
    // Set screen size
    await page.setViewport({width: 570, height: 570});
    await page.screenshot({
        path: `./image/${now}.png`,
        fullPage: true,
    });

    await browser.close();
};

main(text)

