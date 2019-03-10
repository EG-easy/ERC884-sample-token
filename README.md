# ERC884-sample-token

## ERC884とは
DELAWAREでは、ブロックチェーンを用いて、会社の株の分配などを含めて管理することが正式に認められている(medium参照)。ERC884は、DELAWAREの法律に沿った会社の株のシェアを表すERC20になる。

tokenの仕様では次のような特徴がある。
- token holderは、認証を受けるまでそのtokenを使えない
- token holderが、万が一秘密鍵を無くしても、再発行することができる(cancelAndReissue関数)
- 管理者権限が与えられている(add/remove/update/supersede/verified)
- 株のシェアは小数点以下に分割できないのでdecimalsは必ず0になる
- transferおよびtransferFromは、verifiedされたアドレスにしかtokenを送れない
- ERC721のようにmetadataとaddressを関連ずけることも可能だが、その場合、先のDELAWAREの法律と一致しないことになる
- metadata(nameやshare比率など)は、hash化してしてblockchain上に刻む
- Implementersは、そのtokenの持ち主の情報をオフチェーンの情報と照会することができる

**注意**
STOが可能かどうかについてに関する法律ではないので、今後さらなる調査が必要

## Getting Started
**requirement**
python (2系)
truffle
node

```
$ git clone https://github.com/EG-easy/ERC884-sample-token.git
$ cd ERC884-sample-token
$ npm install
$ truffle test
```

### ropstenにdeployする
- [metamask](https://metamask.io/)のinstall
- [ropsten](https://faucet.metamask.io/)のETHをGETする
- truffle.jsにアドレスのニューモニックを付け加える
- truffle.jsにinfulaのapi keyを付け加える

```
$ truffle migrate --network ropsten
```

## 参考
[Tokenising Shares: Introducing ERC-884 – Coinmonks – Medium](https://medium.com/coinmonks/tokenising-shares-introducing-erc-884-cc491258e413)

[EIPs/eip-884.md at master · ethereum/EIPs · GitHub](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-884.md)

