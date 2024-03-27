const textToImage = require('text-to-image');
const crypto = require('crypto');
const path = require('path');
const _ = require('lodash');
main = () => {
    const content = "##Yomi Block Puzzleについて\n### 概要\nSKALE Network (SKL)※上のNFTゲームで、盤面でパズルを特定の形で合わせることで、パズルを消して、高得点を目指していくゲームです。\n※SKALE Network (SKL)はEthereumのサイドチェーンネットワーク上に構築されており、SKLではユーザーはガス代を支払う必要がありません。\n\n### ゲームの内容\nテトリスと数独のような盤面を組み合わせたシンプルなゲームで、盤面で一直線や３×３の正方形を形成してブロックをけしていくゲームです。\n\nゲームをプレイしていると蜂が飛び回ったり（コンボ中であることを示すものです）、デイジー、ローズといった可愛らしいモチーフがゲーム内に散りばめられていて、ゲームをプレイしていると和みます。\n\n連続でブロックを消してコンボを発生させると、デイジー(ヒナギク)が発生し、デイジーのあるブロックを消すと獲得でき、それを使ってペットのアクセサリー等を購入できます。ペットは下の画像上部のきつねのようなキャラクターです。\n\n![Screenshot_20240305_093942_Yomi Block Puzzle.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1710904571038.jpg)\n\n\n上の画像中の白い花がデイジーで、**赤い券がラッフルチケット**です。\n**ラッフルチケット（抽選券）については、P2Eの項目でご説明**します。\nブロックを消すことで入手できます。\n\nゲーム内には、ローズ（バラ）も存在しており、ペットのプレミアムアイテムを入手するために使えるゲーム内通貨です。ローズはログインボーナスなどで入手できます。\n\n![Screenshot_20240311_221236_Yomi Block Puzzle.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1710904601634.jpg)\n\n※デイジーもローズもあくまでペットの「装飾品」を購入するために使うという位置づけで、P2Eに使用するものではありません。\n\n\n望んだ形のブロックが引けるかという運要素も多分にありますが、プレイを重ねる毎に徐々にスコアが伸びていきました。\n\n![Screenshot_20240229_090306_Yomi Block Puzzle.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1710904613774.jpg)\n\n↓何回かプレイしたあと\n\n![Screenshot_20240303_134513_Yomi Block Puzzle.jpg](https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1710904623213.jpg)\n\n### P2E要素\n今年２月末に大型アップデートをリリースし、Yomi Block Puzzleをプレイしながら暗号通貨を稼ぐことができるようになりました。\n**$SKLトークンを獲得できる抽選が毎日開催**されています。[抽選に関する詳細(Yomi Block Puzzle Raffles Play to Earn)](https://yomigames.medium.com/yomi-block-puzzle-raffles-play-earn-f2108eb503c5)\n抽選を参加するには、特に課金は必要なく、ゲームプレイをする中で抽選に参加できるチケットが入手(先述の赤い券を含んだブロックを消すことでゲット)できます。\n\n特定のNFT（Oni Squad若しくはOni Mansion） ホルダーには、当該抽選券のボーナスが毎日もらえます。\nボーナスの抽選券を入手するためには、ゲームアカウントとOni Squad 若しくは Oni Mansion のNFTを保有するウォレットとリンクする必要があります。\nリンク方法はゲームプレイの設定画面から、ゲームの登録メールアドレスに認証メールを送り、PCでそのリンクを踏んでメタマスク等のウォレットで接続することで完了できます。\n\nゲームをプレイやNFT保有ボーナスで獲得する以外に、以下の方法を用いて抽選券を追加で獲得することもできます。\nDiscordに参加(1 回のみのボーナス)\nYomi Games Discordの定期的なコンテストに参加\n公式Twitterをフォロー(1回のみのボーナス)\n広告を見る (1日1回のみ)\n\n抽選で付与されるゲーム内通貨であるBUCKS（バックス）は、10バックス = 1$SKLのレートで $SKLトークンと交換できます。※獲得したSKLの引き出しは、記事執筆時点ではまだできません。今後できるようになっていくようです。\nさらに、将来的には、バックスは他の暗号通貨にも交換可能になる可能性があるようです。\n\n#### Yomi Gamesが手掛ける他のゲームについて\n**このゲーム開発会社は、Oasysチェーン※上にもゲームを作っています。Yomi Gardensという作品で、また次回以降の記事でご紹介**できればと思います。\n※レイヤー２のHomeVerseが使われています。先にご紹介したNFTゲーム「ブレヒロ」でも使われているチェーンになります。\n参照サイト：[Yomi Gardens: Launch on HOME Verse Blockchain](https://yomigames.medium.com/yomi-gardens-launch-on-home-verse-blockchain-3ed52527188c)\n\n### 参考サイト\nYomi Block Puzzleゲームダウンロードリンク\n[🤖 Android ユーザー：Google Play](https://play.google.com/store/apps/details?id=com.yomigames.yomiblockp)\n[🍎 iOS iPhone ユーザー：Apple APP Store](https://apps.apple.com/app/yomi-block-puzzle/id6446411877)\n\n[Oni Squad NFT(OpenSea)](https://opensea.io/collection/onisquad)\n[Oni Mansion NFT(OpenSea)](https://opensea.io/collection/oni-mansion-nft)\n[公式X](https://twitter.com/yomigamesgg/status/1762291435729207433)\n[Yomi Block Puzzle: Live on SKALE Blockchain](https://yomigames.medium.com/yomi-block-puzzle-live-on-skale-blockchain-dcf07aeaa5f6)\n[参考：SKALEチェーンがガス代無料の理由（英語）](https://skale.space/blog/how-does-skale-offer-zero-gas-fees)\n"
    generateArray(content);
}

generateImage = (item) => {
    const now = new Date().getTime();
    textToImage.generate(item, {
        customHeight: 800,
        maxWidth: 800, 
        fontSize: 18,
        fontFamily: 'Arial',
        verticalAlign: 'center',
        // textAlign: 'center',
        debug: true,
        debugFilename: path.join('image', `${now}.png`),
      })
}


hash = (str) => {
    // Tạo một đối tượng băm với thuật toán SHA-256
    const hash = crypto.createHash('sha256');
    // Cập nhật đối tượng băm với chuỗi đầu vào
    hash.update(str);
    // Trả về giá trị băm dưới dạng hex
    return hash.digest('hex');
}

generateArray = (content) => {
 
    const array =  content.replace(/#/g,'').split('\n\n');
    console.log(array)
    console.log(array.length)

    console.log('array')
    
    _.map(array, item1 => {
      return generateImage(item1);
    })
}



main();