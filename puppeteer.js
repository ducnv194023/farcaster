const puppeteer = require('puppeteer');
const _ = require('lodash')



const result = [
  'THE LAND（エルフの森）について',
  '\n' +
    '<p>THE LAND（エルフの森）は、株式会社HashPalette（ハッシュパレット）が開発するNFTゲーム(ブロックチェーンゲーム)です。\n' +
    'リリース直後はメンテナンス続きで快適にプレイすることが難しかったですが、最近は、筆者がプレイしている限りではサクサク進められるようになりましたのでご紹介させていただきます。</p>\n' +
    '<p>以下では、無課金で稼ぐためにやることを記事にさせていただきます。\n' +
    'ある程度遊んでみて、課金を検討するのが良いと思います。</p>\n',
  'ショップで広告を見る',
  '\n' +
    '<p>以下のものが広告視聴でゲットできます。</p>\n' +
    '<ul>\n' +
    '<li>120EG(課金してゲットするコイン)</li>\n' +
    '<li>240ハート(装飾を買うための通貨のような働き)</li>\n' +
    '<li>箱詰め用木材1個(NFT化に使う)</li>\n' +
    '<li>星の種1個</li>\n' +
    '<li>星の粉1個※\n' +
    '※星の粉は、記事執筆時点では広告で入手できましたが、公式Xで今後は入手できなくなる可能性がある旨アナウンスがありました。(<a href="https://twitter.com/THELAND_ELF_JP/status/1768250143269421069?t=xQbvsoNn_W1_zTx6mrhSDw&amp;s=19">参考</a>)\n' +
    '画面上部の「ショップ」(お店のアイコン↓)から広告を見るとアイテムがもらえます。</li>\n' +
    '</ul>\n' +
    '<p><img src="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356834237.jpg" alt="Screenshot_20240316_153539_THE LAND.jpg">\n' +
    '!\n' +
    '全て視聴する必要は無いと思いますが、星の種・星の粉・木材はゲームプレイでなかなか手に入らないので、手元にない場合には視聴をお勧めします！\n' +
    'なお、作物を生産した際にも、まれに「星の種」を手に入れることがあります。</p>\n',
  'スタージャンボをゲットする',
  '\n' +
    '<p>広告視聴などでもらった星の種を畑に植えます。\n' +
    '収穫すると、デイリーミッションの「星の作物を収集する」がクリアできるので、スタージャンボが受け取れます。（なお、星の粉をかけてから収穫するとラックがアップして以下で説明する星の作物の入手確率がUPします）\n' +
    'このスタージャンボは1週間に1度抽選があり、当たるとダイヤモンドの作物(100,000ELF=約100万円相当)がもらえます。※宝くじみたいなものです。\n' +
    '過去、X上では、当選した方が当選ツイートをされていました。\n' +
    'スタージャンボの保有枚数などは、PLT Place(NFTのマーケットプレイス、以下マケプレ)から確認できます。</p>\n' +
    '<p><img src="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356948646.jpg" alt="Screenshot_20240229_160624_Chrome.jpg"></p>\n',
  '星の作物をELFと交換して稼ぐ',
  '\n' +
    '<p>この「星の種」を育てると、「星の作物」やエルフシルバーを獲得できます。\n' +
    '星の作物は毎回手に入るわけではなく、運が良いときに手に入ります。\n' +
    '星の作物には、ダイヤモンド、金、銀、銅の4種類があり、先述のダイヤモンドの作物のみはスタージャンボの抽選を通じてのみ得ることができます\n' +
    'そして、この「星の作物」は、エルフトークン（ELF）と交換することが可能です。</p>\n' +
    '<ul>\n' +
    '<li>作物→交換できるELFの量\n' +
    'ダイヤモンド作物（※スタージャンボの抽選のみ）→100,000ELF\n' +
    '金の作物→8,000ELF\n' +
    '銀の作物→800ELF\n' +
    '銅の作物→8ELF</li>\n' +
    '</ul>\n',
  '招待コードを入力する',
  '\n' +
    '<p>ゲームをある程度進めると、招待コードを入力する場面が出てくるので入力します。\n' +
    'スキップもできて、その場合は、後からでも、画面上部の「握手マーク」からいつでも入力できます。\n' +
    'チュートリアル完了後、下記の招待コードを入力すると、10エルフトークンがプレゼントされます。</p>\n' +
    '<p>入力すると、お互い10エルフトークン(記事執筆時点で約120円相当)もらえるので、入れておきましょう！\n' +
    '招待コード【JYZ7H5】、良ければお使いください。</p>\n',
  '箱詰めNFTを売る',
  '\n' +
    '<p>PLTPlaceで集めた作物などを50個からまとめてNFT化して売れるので、無課金でもゲームを頑張って進めておきましょう。\n' +
    '最低出品額は200円です。</p>\n' +
    '<p><img src="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356958269.jpg" alt="Screenshot_20240229_161201_Chrome.jpg"></p>\n' +
    '<p>箱詰めする前に一手間かけて、マケプレで実際に売れているものを確認してから箱詰めした方が売れやすいと思います。（筆者は読みをことごとく外して、売れたためしがありません汗）</p>\n' +
    '<p><img src="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711357177048.jpg" alt="Screenshot_20240229_161400_Chrome.jpg"></p>\n' +
    '<p>記事を書き始めた時点では、上の画像のとおり、採取に手間のかかる貝を50個箱詰めしたものが売れていました。\n' +
    'しかし、すぐに300個箱詰めしないと売れないようになりました。</p>\n' +
    '<p>また、リンゴが様々な加工品の原料になるので、売れるかもと思い、箱詰めしましたが、これもまだ売れていません。</p>\n' +
    '<p><img src="https://crypto-learning-club-prod.s3.ap-northeast-1.amazonaws.com/articles/content/1711356967199.jpg" alt="Screenshot_20240311_015707_Chrome.jpg"></p>\n' +
    '<p><strong>しっかり売るためには、頻繁にマケプレの売れ行きを確認し、また、今後何が売れそうかを推測する必要がある</strong>ように思います。</p>\n' +
    '<p>無事に売れれば、エルフトークン若しくはパレットトークン(PLT)を稼ぐことが可能です。</p>\n' +
    '<p>以上、お金をかけずにプレイしてみる方法についてご紹介いたしました！\n' +
    '王道の農場経営ゲームですので、楽しめる人が多いのではないかなと思います。</p>\n',
  '参考サイト',
  'Web3について更に知識をつけたい方へ',
  '\n' +
    '<p>当プラットフォームCLCでは<strong>体系的に正しい知識</strong>を皆様に身に着けてもらうべく情報発信をしています。\n' +
    '是非Web3ゲームを入口として、CLC内のコンテンツを使いWeb3に関する様々な事柄について学習してみてください。\n' +
    '<strong>CLCでは体系的にWeb3のことが学べる<a href="https://cryptolearningclub.org/course?type=master">各種コース</a>もご用意</strong>しています。\n' +
    '筆者自身もWeb3ゲームをプレイするばかりでしたが、その裏側にある技術がどうなっているか気になり、CLCで学習を進めています！\n' +
    '皆様と一緒に知識をつけていければ良いなと思っておりますので、一緒に頑張りましょう！\n' +
    '最後までお読みいただきありがとうございました。</p>'
]


_.map(result, async(item) => {
  if (item === '\n') return 0;
  await screen(item)
  return 1
})