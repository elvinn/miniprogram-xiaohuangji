const app = getApp()

const IMAGE_STATUS = {
  LOADING: 'LOADING',
  SUCCEED: 'SUCCEED',
  FAIL: "FAIL",
}
const originImageData = [
  {
    title: '小黄鸡',
    imageList: ["006da5b8bbc58fc8ebe4145d3f34c0d8.gif", "00b2e26fe0f2ef63e7bc7de1b0cb32db.gif", "00f1dac6271eaaf4301f2d120d66f361.gif", "01d8922f569a0f4d06e7161aa2de1974.png", "023153a6934d552964bc36b51c498241.gif", "02c8d11142be190f784c2c29332f88e6.gif", "03b8d7c4578796363eeafb1e6d05d23f.gif", "03cd54ff8e31775edcf652ad7841ef68.png", "04afada0dae6e4b7bd8799a9581a801b.gif", "04c862be640ffe9d164e1ba6e4f4461d.gif", "04de1c1d91c996a55d4e84c18d684311.gif", "05ee27ef526a79136f733ff77f611a18.gif", "0675c13b1dbdab9c2b83bbbf7ad9f76a.gif", "06f2fb14b8c4d0db72ec7876ec0234e8.gif", "09323e00d6be0b3abdbf283f9e715b92.gif", "0980b06805896ad985fc0a2ba42fa9c3.gif", "09b8b52c73139ea694dcf890ee79abbe.png", "0af7f3f9b25209cd1ba822e939bcca33.png", "0cdddbfbd025724791ed37cf9aaf5258.gif", "0e2bf3ecd7cb72e5c173a08e15a022d6.png", "0e2c96a9503e55be06c2a5abc1030f58.gif", "0f82e87ad989bd82df0a2b7ee23b4ccc.gif", "0fddf68b22f8ae6bfd918b7d437a1f4c.gif", "1027f036fdbfd3a536d7b4556dcc58bf.gif", "1088000ddb721001b619428800f957b5.gif", "10bc92a04e5c524b6955086002d607f4.gif", "11fc21b1aee48bc98f27cfc8e066a7f8.gif", "1390871b987083bbd07330fa50f75366.gif", "139a0803e0851473762d35daba4f09f3.png", "13b9b2f18833f3a1b332c833a4dd1280.gif", "144823d38b4da1e84b3eabb1a1784ce5.png", "14d4b02d694b38cc7429c10c0c32ec7a.png", "164c7610b39df96a8b918f5bf86c2ac7.gif", "16b546d4618ee481ae7aa9be1a9c26d3.gif", "1782bdd9252b010e1b777040675d42e5.png", "1790292e4c50c0d48e8030f36d27da7e.png", "18c93b72e864f181ee249638c9770428.png", "1917c73cd66cc2645e7c168e0617a25d.png", "1a0fa09476737e548f5b3cdea759c418.png", "1a29712a094c6c8f6a351c71b563b12e.gif", "1a9153943862a8cbadfbba47708ac78d.png", "1acde6ff749ac0dd9e6986d9a2e1bc8a.png", "1c1c3781bea0ba030c2459ad759ebc6d.png", "1d12d82d9f2d83bb220d955bc426e166.gif", "1d4f87f6cc19c249f0aef4c54695991f.png", "1d85949609844b8717f1764ad3508952.gif", "1ddebb1c7afb674e3d8ff78c2bf588f5.png", "1ef60b400d25757971288c89bfac0642.png", "1f024cf61bc93cab8f171900c226808f.png", "1f5fc6f349f3c64a011992fcc9e644b6.gif", "1fd023577861a35f96078cc4f10fac6b.gif", "204f0100b30010beb53f141bae728fd9.gif", "21121e407cc350fd4c85f2d10b41195f.png", "21274c19e6dadf2dcb7d5cd20bc7be54.gif", "2187868fadafa51e4a188ced50d1542d.png", "21a10cddb45e7aaf4a107b96c591a6fa.gif", "21ce4614b0d8518dbe0567a8f429b469.png", "21eb0391a6ad524c78012653db6e2635.png", "225a1eb264c91980ab4b94fee0586f21.gif", "23fb7f255695a562852ddc65151db90f.png", "24e11ca97457e20616051906b98e1657.gif", "2504761342c63ca9723199aaf61b78f2.gif", "252c12c98d9f6be1b1548ed120a38963.gif", "25363c2c2fc9e19c733e2b0183ccc1b1.gif", "260caae8abe536f00ef9853e9ec870be.png", "2664102b204b2516c6799c398edc03d5.gif", "28c89dde80c325cd99ccfe571ca5cbd6.png", "2babf571aec725651acab2cea52c5207.png", "2bf832d6658af58ca0e96482aa67f363.png", "2c17392727af4780619ce71521ef388d.png", "2c3291509e173bf9484ecde4191b6461.gif", "2c46fa28c2f732cf7fbabd98749af443.gif", "2cbebe8dba5bf8c93f51b5468556a01c.gif", "2d42877c9fe2ea642718b7ac1b03b20c.gif", "2dc944268d66ba0098dcf03c6539b9ac.png", "2dd0a0520bc5ac0d24d4e5b48f2324f2.png", "2e0ae565fc49f3ebe02e0f3b7e08e4f6.gif", "2e126d3e8c84523a878d3ba9a362e8d6.png", "2f3d34e29ef46f3fb51b7224ee468177.gif", "31463ea77ec50464427aad674348386a.gif", "31c9c2579f9f6a5184683e5e4d084221.gif", "334c0c2e865af0cbfbe1bb2a1390f503.png", "33d3b5ebb2fb760309942ebe0126269c.png", "345b35c33865aaf7d14e3f114bf994a6.gif", "348138a80959d9bd60ee6350181749bb.png", "35746fae1fea4db6ff88f9f204b6e9ba.png", "365e3fcfd74a849e82fda88bfc89dcfb.gif", "36c0e88418fdc8b55f5fd21be33a79f2.gif", "371d983ac08c835cdabc81b958d9112b.png", "38e5303a305983749b5189cee95ac50e.gif", "38ee1ee30d447450119da6b261f955e8.png", "39f8a6b18f012b952364d55c82de7700.png", "3a1ddf0c1d3b531eae550e00337da21e.png", "3a7c8f6086413f8d3c6b2cc672acb2ea.gif", "3bc21add97490c7b591f3a45bd1add72.gif", "3d5ffa6395dbe4299c8d727860a11678.gif", "3d7a5a878d4992c6bac672b2544474d7.png", "3e7355dcff7425549b8fa66ac253ee0e.gif", "3eb7b989a310b65d49fa08bb2529f318.png", "3f616b9dd7e600cab2122775c1d2d29c.gif", "403279d2219241cca3ee5ba4ba86a321.png", "40b0edcd95b9f9016414757de7cf0ffd.png", "420801eb1de28d365cb9f0513bce715b.png", "42371a318daec4416a3f2f2d8e4adb2a.png", "42a96a230a42008632bcdb6cde67b18a.png", "42d40aa214de23a2ee65f649d2a2e7fe.gif", "43f52aad6af764dfa2c8cc2ac6d5432e.gif", "4480441c28bd04d550815de57beeb1d7.gif", "4534654b040e7e2c5f595608df4764d6.gif", "457e6c5069aeee4919cd338fb780292f.gif", "4865de1c8c7f11c74fe57c77496c64fd.gif", "489a9848b5f2c1d6a6205e079fbb31c1.png", "49166c906b24fe197f7842f1661c9903.gif", "49ea27c5100e79c357ea525bda5db42f.png", "4aa3e9d0c8f25040d77d595cdb52fedf.gif", "4ab475d0f86f25f9dd599e58639029a8.gif", "4b63471530d29b5182f165c83226f20e.gif", "4c8ed0fa5c0fa9f91b89a9e32c743602.png", "4d28f36c9f90ff2b8147c5f6fc7aaf08.gif", "4ee82396d506b268f79469c24f64e75d.gif", "4f5617fc445c7f30112bbb887fe989fe.png", "503b4b79e4ec70c2f66b7d0ec20ac0ba.gif", "5098e02eea932ba95d652a3664271de1.gif", "50ddcec8d051c722529e98b673127361.gif", "52057643f0edf36285ee55ece4a876f3.gif", "52f97d5c8720af71f33fb12a3054aaa8.gif", "531875394bc9e59cc78cb31b29f90bf6.gif", "5319eb418c2236a43d712fd241f5a9fa.gif", "533db20e84164bf5bacdd94b9fdb51d6.gif", "53446461433df170731d6161e00f725e.gif", "53605c1d0758f31775a2a9342ffa43e6.gif", "56eecd58cac3b6593f83998c9f30eb4b.gif", "56fc6d555b197934fa197d44837a2ca9.gif", "574276ee93966764cbaa253fa5940f94.gif", "577860c8b8284c9bddc3090d66f3aa45.gif", "57d070e0fff5c73765dfa4fcdbf4ddde.png", "5932c1fca869c55e45373895d8bda997.png", "5a31ddf26e97f4f068b08db469c2065f.gif", "5a462df18795d4d30b96f4511252de2a.png", "5ad48b93ec14b6660e9f2f0262a462ba.gif", "5b4111736ff9b0a85e0e0915209ec47e.png", "5bb10deac4924cf19968bad31f5de9e2.png", "5bdb3293225d2de2557543c15d5c3d8a.png", "5d07d1c96b29398b8da48d6fd9e0e3bf.png", "5db51663f5a6546a62cb49d08c2c74a4.gif", "5de36eb9d0b127c2d724f02bb7e89e45.gif", "5e8ce6b1ffcb1c27ed2367faadb2c780.gif", "60a54b596aef9c6c517e0ae9045d28b6.png", "60dbf7d8a85851a8cc5ac028528d7749.gif", "612a1c06023a4cbd2cde3b5f61ed2066.png", "6243ab459afa2e989167c0f27875d1e3.gif", "62a1358e9fb0abfbf99d1a0a108bf339.png", "62ee69959b7a52e5e6777e264055bcb7.gif", "637e4d0412a3687255601e6c94bd0caa.gif", "64023589fc796776205a13a099e4be2f.gif", "64ee85cd875f955c33d0529a3122191d.png", "658d22d1a08ef310c52eedb9ed065b02.png", "6764f2e804d705be16233ac8006626c0.gif", "6794e9ec77c263bcb7f629f080df9aa8.gif", "67a58bb1fd29f4bc7e3688b3b983ab20.gif", "67fbc46503af3c8fa8560a603a950641.png", "68d11ff20ae0c425c08ca646d30877de.png", "68e4cbb3a14ff90391b9fad68d1f88e3.gif", "68ff8da8423035d4c6169aa1b37ec6ed.png", "6924b9e64915babb06ffe41a20c40c7f.gif", "698052f5c9a473d3caff38109203f38f.png", "69ce902bdb6634862a088cccc362f783.gif", "6a51c0904c5985184c0e51286cc37716.gif", "6b0b0710c3fbb7de2fd12812f07ee53f.png", "6b5be6632083adf7baa007ad1f1c5773.png", "6b7612590e75d7393dc365febf7c7fed.gif", "6b7cf6cabc4c97d3ebe9988c7fa06c4a.png", "6c2db855525e2195ea406109823b8852.png", "6c5c30a6118ad684f1d74247c37b35d5.gif", "6c5f1d0e80c23e0ca91cd7b2cd8a0dd0.png", "6c945ba2a609e64e6cd1eaeb744c1d27.png", "6c979bdb0cf3e0a2a40715047ba9ddc3.png", "6cb7913590bfcf81dc0276a5b58b7b2f.gif", "6d1152213f7ca74eaea117936230d922.png", "6e662c075889b568d17eca9ca6717688.gif", "6fef87faecb50792dd87194bd5061058.gif", "6ff2eb8a374ded9dbb64cb01dbd2d147.gif", "714b637c4437a66b3d42135c749f62b1.png", "71592cd6852ccd2e88ea42ae46d3d155.png", "720320f110faae80cca1c93e677f056c.gif", "733c39e357a9263df1b23dea1efdfe72.png", "74f71e043dbbd404291f36ae40d819e3.gif", "7647aa6b9fbc8a40f8972416dd30b8b8.gif", "77546e1eaa91f015367826bcc7f29cf8.gif", "77bc285c67af090ad6e0de99141c5acd.png", "7806b0664c62a8e34c61574467765c47.gif", "784763da00a06aef6f689383a8118ac2.png", "7a111991c1dfb751f80b7234f1e58082.gif", "7a3021faae9ed58b88ac3b71579a1233.gif", "7a6f025cf4e3b0c17a5eaa46f2d50a72.gif", "7b368584edcc2d5fe1f6c17c8d34b4d8.gif", "7b725b5778a2cce81b817eaa090ec187.png", "7b76cdd017ba9375bbfe0042d418c27d.gif", "7c00a493fb3b1fc77c82e8d705f8fbf1.gif", "7ef021113a957c1d7072c5a90500d975.gif", "7f0a6a8652e95a964821b99c55196800.png", "7f1c8c65d93cf200504501f02315d164.gif", "7f3db8746a37e78e3ce55bcb334015ec.gif", "818237104adba46bfacb51c249465e10.gif", "81a20aa684cddd4786d2d4d4d463da58.gif", "8304fb014cec03010f160fd57525080a.png", "8345cb084c95dbb4f7cbc00a22b95b21.gif", "8505030a8c1a062e5ac52be21d408dbf.gif", "8585e921305eebb8183d363943f99a29.png", "867ffe2c4e2e3857db61f99de1efa8de.gif", "868e7430bc10afa061e83619030f889e.gif", "8693aeedd9eb4ffec23e3724b66f8bab.gif", "86c8ba78fcbec776261e4baffac8bdc3.gif", "875571aa0be91b41dbe32ee599f3338f.gif", "89dc71ef061945bf0e4724f3a99279ad.gif", "8aaa4dc8a811a275c19aa8bdf3006d8c.png", "8ada2af07eb33bd5437c532662377cdd.gif", "8b52184c1f6f65e7778459d910759387.png", "8c41e8ae9c70be45d2f716b2d24f8593.gif", "8c9bb0334437ff2115d00d530544feba.png", "8d76f1a0229671502c2252671f8c58df.png", "8dc867b9f9edb5cdd42e97817abad1d1.gif", "8f24406797b3393b62db7201faed3e89.png", "8fd74242d73f328010beab8cde706d19.gif", "90ad5a77f0d2cb2cc8c8fbbcb9e807f4.gif", "92f1abce7ddb56040b0f478299d29572.png", "93bb428673cc049990161c39bc4474ce.gif", "94d63c63ac44a22841c00f360cf8aa6b.png", "955b08a61b95e0c7c6b6c48c776f4a2a.gif", "95674a8d24481988f510e30955710373.png", "957e31c519279a9131e6d8ad453d9971.gif", "95a4b6939d02b05dfef909d748c73b02.gif", "95c46841e81452e81d4475efb903437c.png", "96e42d59912d014d36fa62f1307ea74a.gif", "973e778919db4ed8b6b6ab13ad90ea04.gif", "97fd89487f810f83eecfddf03678b302.gif", "97fde77b5cda85b051bda1da811c6de0.gif", "9865388e11f77e9dafe90ac9ffa71f71.gif", "98bf8d8168f594d46b47a084f691ab70.gif", "9afc3bfa7a44fe1e3bf5ad46f489047b.png", "9d6ecbbe324927c16b10bc36eb8b7d8b.png", "9e44ccaee84d1dd2817adce370c38c1b.gif", "9e8b75bceac654096a4c08d0dfa1db57.gif", "9eee86b24f01251ac423d1a3e88ab6bf.gif", "9f4aeb7f1d802e84f60adafccea1172f.gif", "a0f1a9f78c79b4be111a3d6fcddbd026.png", "a131a9231d0e6bde277f8b276f96af3d.gif", "a15ad5c1ec82ae0221d82a55c6004105.gif", "a2e437ebe3f07b6db7c1b57eb8af3329.gif", "a3ab51cc2797fbdb48c056537daeef7b.gif", "a4768e9859afabd5e8d4810cf704db22.png", "a4c4121b5c3c3483487252dd46673e3a.gif", "a654ecb1a82c79f63dd9b94f66a24eb5.png", "a7f63c105f7b298602bac2698931b6c7.gif", "a81b0ce0988e17e43c2e74c743921974.png", "a8591a46baab94bf4e5163ea63319048.png", "a8644dee4614acaf23dbcac62aef7b78.gif", "a941f3c016bad417001c8784c1f23f0c.gif", "a9fd5ad859b70ec88ccc4d6efd90b020.gif", "aa4f18cadf78a9713166253c63017f9f.gif", "aabb7644d4c91efd12e997e6f9d73f08.gif", "aad00d854ca04a9b158e3f031c1dec89.png", "ab4e21e613d292df697cb0adccb711f0.png", "ab57341ae039c63b8082a4941301ccf7.gif", "ab9752a49428a567e445c93041256ceb.gif", "abb5f9ba5bafbd20009bc0d2ed588c5b.png", "accfb4586dd5e0f91bbb16c961fcce70.gif", "acf355d6ea931e283b3981843b0b5470.gif", "ad5897f624b8226f881fa06084c9c1f0.gif", "ae57242ff3bbab5a836a7c63193648dc.gif", "b0b5bd9cc0335777099e568e667b5ca2.gif", "b150bee821fe0f52087cb6ced3cf20e6.gif", "b2dfa4db8ace1f6f7bde09ba4fbed118.gif", "b2fe58aa240a95d97f602f1002e95946.gif", "b411d966d7861f5715c72bbcd0d0e290.gif", "b57df016f871b1297b596bb4114bb0aa.gif", "b681a161e52bf4553fb0840dd745b1d5.gif", "b8be175f4bb6034290a3de82143c1673.png", "ba67779985d55456bef4e499988f47f8.png", "ba91d567774bf4f2ffe545ef7233599f.png", "bb0c40128132b18e4e57823dbb1afb50.gif", "bb7fa14cedeed238b413f4faf9afebbe.gif", "bb99f3f6c3ab3fce6c8c0bbf1cdebd3d.gif", "bba3f47096e0b992f3a03b461fd4b8f5.gif", "bcaa4c5f7b6912124dba80afa4b4fe46.png", "bcd227e8ecf7ee6d6c7fce689b1f5694.gif", "bd1051e7c99ade1d4f7d018983f9b17f.gif", "bd4389c8ef0ab47170f3b94b7cfb3843.gif", "be39b699699ab23a93aec6fc2e73e9dc.png", "be7bb3f286441a8686e48fbc017bedcf.gif", "bf0804f24b5faa9eb31e6d61ecda4fcb.png", "c0f7456a260d3d3167186fc397c80c73.gif", "c15515603308364038dc5132ce062665.png", "c1a517034681b29d07f3bf78bacfa7f2.gif", "c1bbe7a80f00ed415bfc9c26c77ce09c.png", "c2325e8d88997d6d93ed335dfa8f0e4f.png", "c2ab0638f472a4ce341c6e8e33b41255.gif", "c2ed9ff8c2ba19cf6f5745a267c4c318.gif", "c306fd9d7600f0802a20913ceb358039.png", "c567d0c7ecd4c8ebc94417bc25e8b432.png", "c6398ffdea488d688a5b0a8274d16768.gif", "c6d6d6d02714f635da183b7261cd748a.gif", "c712c1ee05089219f8d12efc6bbf8352.gif", "c780685ecc6badda51aee32d05103b87.gif", "c818466670f3100600782a33f49c6239.png", "c878a63ba712e90f163583467e49fe25.gif", "caaf82befae68cc86cea4a66c38eae6e.gif", "cbb15180760e0bd048926178baebcca4.gif", "cc176652f39afd347741d1fec06e268c.gif", "ccaa0378f560209e8d841faa88df45ba.gif", "ccdd83905b34caf77007773870a4815d.png", "ce44468a8cb3db326b7a2045637311a0.gif", "cfe68de49c416f487efd811a39a6742b.gif", "d1077b1287a05b4415ea82f3f4f7b1b9.png", "d140c6658c80e54d8bbe52bd4c7bfa87.png", "d25bacc52bed8bd55e327b4fd60fd3fa.png", "d3730fcec48c32fb5470182d47d63ce7.gif", "d3784e3600928ada3d79d54e00fa73f9.png", "d38c92440f32b0e938d1d836839a9bc2.gif", "d3eb026294c015c9b83035519741e6b7.png", "d3f1e76b8d1f8a90d7827f3d3538cbe2.gif", "d4f27896254dee564053ac0efffd0d7c.png", "d50bdcc7aaa5b2582406605344b1719f.gif", "d5161fcac6de82150397c5057e048015.gif", "d577a8d3264cd416e705d8c4b5902630.gif", "d61c6299c117a2487bb6d1f29ca7111e.gif", "d67dbcbe8593740e6c351305033327e0.gif", "d69ac13b1bff39b3ce51c9c31a9c7b73.gif", "d69d28064a5944c9313db03e8ad6063e.gif", "d6e75c24dbfb40a867fd79dccb8126e2.png", "d875053c317e32ffa2e7bc6c45392ad4.png", "d8bd9096c79f15be6384fadefb4e9c02.png", "d8febfba6f8f5fab6e2107c6fea74c97.gif", "d9c398336717cb21f9f9d3200b4c771c.gif", "d9cd87149db4c019865ff86a8300e854.gif", "d9dbcf52eebc9bbe33065e507d3bdca4.png", "dba3b28b1bdfb3009f65a58fcaac526f.png", "dbcafbb1559f514672eb04399c83f283.png", "dbff11003b5fb93a31e8b1067b283e11.png", "dc219947d8d0e18f8b94fea85c3cb726.gif", "dc267669a240a14f0400009b2511b911.png", "dc58958f051b5d0ff5e8857ccc6530cc.gif", "dc936c0f18e6030608e6fe891106d2f8.png", "dc9447a42f59a1e57479f23db97e6913.gif", "ddc9f96cd494d383fa31a5f5ea5c22d6.gif", "de319b0e56353d14ef5eb7686c7a67a8.png", "deb7c89654e93d988f71f0ba49ee67b2.gif", "df1a5620b80842311dc3520efed2e0c3.gif", "df20d577d11e53b22d3f192519c99b69.gif", "e03014aeeb2177c0c15ea0c97ae748bb.gif", "e08d4ddd7bd05b154bf0d89a78d74f53.png", "e11b69affac51933ea7b15d3c53e4f19.png", "e19494edf41bb5a39d84a2838e7ceb94.gif", "e21490f537bcc27dbeffa860502463be.gif", "e24502d1134bd6db513bf2bb405ddf60.png", "e255a65163b0b1299183aa3ce3867043.png", "e30507f8e23c2abd337641c5f1a2dc59.png", "e31bb84221e99aa327c6fc40befc54da.png", "e39ae0494c76f6894aa6f3321e3e3984.png", "e418a5ce9d421cab8ffec69a0aeabcae.gif", "e46e9a6cc378597efa8295ef4c6a265e.png", "e4c612d5390e21d73e5e9f7f0bbf409b.gif", "e54ecf1a773cb0ba03c10a4e3e882b46.png", "e650ee8e467514df5fd2706dec90e0af.gif", "e6bc53b98e0cdfc74365644cb3aed07a.png", "e6f58ddc836d7b4c01155f1bf9192d5f.png", "e746ee7af8d9531ed495bc4ecc1f6751.png", "e8e89e14c3de06a51251df9f8ae97f8b.gif", "eb68b70bccb98fd1e6f7c27c33b8c30b.gif", "ebf1b39f733be10054acd7f5cc54d426.gif", "ec87f92983a1e3e3202d9a6a27ec7558.png", "ecaf230533d781af5b4b662243c3889a.png", "ed5b3b78a32f1cea12a4045247e05e20.png", "edac5463a2fc8c7ad069bd55a0a259e1.png", "edcdc4e9dbfa1911d17a074f83bca9f5.gif", "ee44a3546dd8b5b26592b452229d39a9.gif", "ee6c17a5e830d44c3dc2014d6e7881e6.gif", "ef004b14e0b429f24d58161bb33357f7.png", "ef3e27b3d076871f9eb0612287f5cb4d.gif", "efcdb97013304fb1d7c72f43680e3834.png", "f00f0ceb7aa2b87c8adda7ad73a4f0bc.gif", "f0603d2db9a01696542c5fd5dc020519.png", "f07847cc4c33825511e9951e19b7fb28.gif", "f1f629811b35e30a73a9fe42136f4bc4.png", "f226b76d6d3b9b1bcba1c2ca1f58710c.gif", "f35f3e50980404445d5f3fa1e01a37dd.gif", "f5f5faab09b1433576735cb44dcf030e.png", "f624ea7c6ee36d181c49716a914233ab.gif", "f699b247d1912922845784624f97f180.png", "f71de495b830f1ba4d9e47dacb219b39.gif", "f86828dbf2156a94e12b513c1b20d4af.png", "f8d44b8f0816adb7dc60d373dd4ba43c.gif", "f8e77530ce989f80af44e764ede1dd05.gif", "f96ce2175df291664a4f397e47dc8286.gif", "fa67c65a2450f977e240f72571c8f645.png", "fbe04aefbd4e6ad4b05413b95d31512a.gif", "fc831b35f9770322214c27d1661c1010.png", "ff8e3e2e0236b8616db8e87a6a9a5d0d.gif", "ffc2b31fa85189f912abaa4ae57caa0f.png", "ffeafad312c72698baca208ccf3f58d7.gif"]
  },
  {
    title: '悲伤蛙',
    imageList: ["001.gif","002.gif","003.gif","004.gif","005.gif","006.gif","007.gif","0-1d7351070c.gif","0.webp","000.gif","04w7ec.gif","0993754ec5434dfa4ba5a4d378f6b41f.jpg","09f48d09da3848628816926949079dc6.jpg","1-d244c37d4e.jpg","10-11b72b7c29.jpg","11-89b0e4e20b.jpg","12-22d1394d56.jpg","13-cbabbb8fc7.jpg","14-72c4607ece.jpg","15-a18edd95a2.jpg","1527736536931229.gif","1527736540452452.gif","1527736544127577.gif","1527736550800197.gif","1527736554484866.gif","1527736560259567.gif","1527736564494942.gif","1527736569958099.gif","1527736573463477.gif","1527736578312925.gif","1527736583715037.gif","1527736588717250.gif","1527736592295960.gif","1527736596640000.gif","1527736600994103.gif","1527736674270418.gif","1527736685165336.gif","1527736690971273.gif","1527736694879112.gif","1527736699821651.gif","1527736707674037.gif","1527736719391368.gif","16-9f06228b52.jpg","1685df96703b01690c49e1bd6ed9a269.jpg","17-5174bf886d.jpg","18-100d04aff3.jpg","19-0bafb7cad8.gif","1c95ddb74e1e0902.gif","2-bcd1da8e0c.jpg","20-ebb863494d.jpg","21-74ab004734.jpg","22-1aed00c884.jpg","23-0381dc4f5d.jpg","24-213e3b7989.jpg","25-ea77a5d65a.jpg","26-277b13a134.jpg","27-1cc6210204.jpg","28-237d0f7110.jpg","29-631690b4a8.jpg","2f1d2349e363c76df96f574c537cb27a.jpg","2f293c0c181e38117033ed418720a3aa.jpg","3-cf2d2be518.jpg","30-90f5e39be4.jpg","31-9de34bad8c.jpg","32-13a0cb9dba.jpg","33-8f643d7d05.jpg","34-a7d7dfc0bf.jpg","35-e77cb4bf31.jpg","36-b38aaa4a97.jpg","37-a025678b4f.jpg","38-f22d066288.jpg","39-7a598aa94c.jpg","4-84635804e3.jpg","40-547a6c9a44.jpg","41-b25a35e8b4.gif","42-a7cc658726.jpg","43-b592906275.gif","44-732e13b515.gif","45-95bc452284.jpg","46-b9c0809d2d.gif","47-3ab9f4215a.jpg","48-945be1c49e.jpg","49-03014dabcb.jpg","49807724b380ca738c7a56ec41c8bd9f.jpg","5-9d78619d1f.jpg","50-930843e31d.jpg","51-b2c6f88c1f.jpg","52-f386837d73.jpg","53-f60e96b44b.jpg","54-b8b3c5ff44.jpg","55-edd8a729fe.jpg","56-1b2cd8735e.jpg","57-b1e917a130.gif","58-a82dbfb794.jpg","59-ddbedc16d9.jpg","6-211eb7f568.jpg","60-69e98edaee.gif","61-bfb5ad9c16.gif","62-67cf581a8f.gif","63-82a7710065.jpg","6ef271a6ddde96dc6907f4e829b09b30.jpg","7-d480d75363.jpg","8-adacd5900a.jpg","9-46283fc058.jpg","a08334377580ef8e968d1d28aff6bbb8.jpg","a78yfa1147263839855.jpg","ab7d6de2356f59b7de9777a39bfdaf51.jpg","b6eb657bfe4e82e0b45a727710c3cd22.jpg","c524a37f7a0b3534aa1830e10e17989c.jpg","c9dfd6e239688eaa4aa7bfda44f1dcfb.jpg","e0db7978cb19e12e9cd7fa1ca1d649e1.jpg","e4f3695c8a4f44a09114e74f4dcd2b9d.gif","e9d09be9d22f587bb0f398f63388ed93.jpg","v2-049244901fa317592d1ef6016f051c5d_b.gif","vgxobd.gif"]
  },
  {
    title: '胖虎',
    imageList: ["胖虎00001-意气风发.gif","胖虎00002-我真的很不错.gif","胖虎00003-靓仔总是孤独的.gif","胖虎00004我大雄今天就是要刁难你胖虎.gif","胖虎00005-感光波biubiu.gif","胖虎00006-胖虎射线biubiu.gif","胖虎00007-我胖虎跑步都是那么帅.gif","胖虎00008-我胖虎经不起刁难-你刁难我-我就打你.gif","胖虎00009-你要跟我胖虎作对吗.gif","胖虎00010-我大雄不出手你胖虎要上天了不成-害怕.gif","胖虎00011-看我干不干你就完事了.gif","胖虎00012-在干嘛-有点想你.gif","胖虎00013-我胖虎出去抽根烟-回来要看见八个红包，不然锤死在座各位.gif","胖虎00014-怎么了-我胖虎说的有毛病吗.gif","胖虎00015-我是你的双马尾小宝贝吗.gif","胖虎00016-我看-你他妈就是刁难我胖虎.gif","胖虎00017-谁特么在刁难我儿子胖虎.gif","胖虎00018-你胖虎算什么东西-我是你爸爸.gif","胖虎00019-胖虎-爸爸是多久没打你了.gif","胖虎00020-胖你妈的虎-老子叫刚田武.gif","胖虎00021-不好意思你们有没有见到我儿子胖虎-就是那个穿着屎黄色衣服装逼的那个.gif"], 
  },
  {
    title: '滑稽',
    imageList: ["000000001.gif","滑稽大佬00001-360度鄙视你.gif","滑稽大佬00002-抱竹竿.gif","滑稽大佬00003-抱住-抱墙.gif","滑稽大佬00004-背书包-一名路过的小码农.jpg","滑稽大佬00005-菜刀-给你看看爸爸的厉害.gif","滑稽大佬00006-超怂-摩擦-抱住.jpg","滑稽大佬00007-打不着-打不到.gif","滑稽大佬00008-打人-可怜.gif","滑稽大佬00009-咚次嗒次咚咚哒.gif","滑稽大佬00010-反弹.gif","滑稽大佬00011-搞事-搞事情-酒瓶.gif","滑稽大佬00012-鼓掌.gif","滑稽大佬00013-哈腰-低头.gif","滑稽大佬00014-害怕-舞动青春版.gif","滑稽大佬00015-喝咖啡-咖啡.jpg","滑稽大佬00016-横向扭腰-划水.gif","滑稽大佬00017-夹心酱.gif","滑稽大佬00018-就不要-不要.gif","滑稽大佬00019-看我的腰-扭起来.gif","滑稽大佬00020-跪着-平移.gif","滑稽大佬00021-垃圾-辣鸡.gif","滑稽大佬00022-浪里个浪.gif","滑稽大佬00023-绿帽子-带上它你将拥有力量.jpg","滑稽大佬00024-猫-喵喵喵.gif","滑稽大佬00025-毛巾-布偶滑稽.jpg","滑稽大佬00026-秘技-反复横跳.gif","滑稽大佬00027-摸鱼.gif","滑稽大佬00028-脑子是个好东西希望你也有.gif","滑稽大佬00029-扭屁股-变色-内裤.gif","滑稽大佬00030-扭起来-斗舞.gif","滑稽大佬00031-啪啪啪.gif","滑稽大佬00032-劈叉-跳舞-卖艺.gif","滑稽大佬00033-皮球-磕头.gif","滑稽大佬00034-欠收拾.gif","滑稽大佬00035-提起-上吊.gif","滑稽大佬00036-投降.jpg","滑稽大佬00037-兔子-兔纸-看左边-看右边.gif","滑稽大佬00038-要饭.gif","滑稽大佬00039-左右横跳.gif"],
  },
]
const imageDataList = originImageData.map((item) => {
  const { imageList = [], title } = item;
  // encodeURI 一定需要，不然有中文的话会导致图片长按发送给朋友失败
  item.imageList = imageList.map(name => ({
    url: encodeURI(`https://elvinn.cn/img/xiaohuangji/${title}/${name}`),
    status: 'LOADING'
  }));
  return item;
});

const messageId = 'oaORJVUD1jVuKxnM0TCyCSJlUJU8CXAcNeVKLYsmWD0';
const messageType = '新表情包提醒'

// 点击事件顺序：touchstart → longtap → touchend → tap
Page({
  data: {
    imageDataList,
    activeTab: 0, // 当前选中的 tab 下标
    showSubscribeBtn: false,
    visitedTabList: [0], // 已经访问过的 tab 下标
  },

  onLoad({ tabName = '' }) {
    this.initTab(tabName);
    this.fetchMessageData();
  },

  onShareAppMessage(event) {
    wx.reportAnalytics('share_index', {
      from: event.from,
    });

    return {
      title: '一起来看看有趣的表情包吧',
    };
  },

  initTab(tabName = '') {
    if (!tabName) {
      return;
    }

    const { imageDataList = [] } = this.data;
    for (let i = 0; i < imageDataList.length; i++) {
      const { title = '' } = imageDataList[i] || {};
      if (title === tabName) {
        this.setData({
          activeTab: i,
          visitedTabList: [i],
        });
      }
    }
  },

  // 获取订阅消息数据
  fetchMessageData() {
    wx.cloud.callFunction({
      name: 'message',
      data: {
        type: 'query',
        idList: [messageId],
      },
    }).then((res) => {
      const {
        result: {
          code = 0,
          result: [ subscribeTimes ],
        } = {},
      } = res;

      // 请求成功且未订阅过消息
      if (code === 0 && subscribeTimes === 0) {
        this.setData({
          showSubscribeBtn: true,
        });
      }
    });
  },

  // 更新选择 tab 后的数据
  updateTabSelected(tabIndex) {
    const newData = {
      activeTab: tabIndex,
    };

    const {
      visitedTabList = [],
      imageDataList = [],
    } = this.data;
    if (!visitedTabList.includes(tabIndex)) {
      visitedTabList.push(tabIndex);
      newData.visitedTabList = visitedTabList;
    }

    this.setData(newData);

    wx.reportAnalytics('switch_tab', {
      tab_name: imageDataList[tabIndex].title,
      tab_index: tabIndex,
    });
  },

  onTabClick(e) {
    const index = e.detail.index
    this.updateTabSelected(index);
  },

  onChange(e) {
    const index = e.detail.index
    this.updateTabSelected(index);
  },
  
  onTouchStart(event) {
    this.startTime = event.timeStamp;
  },

  onTouchEnd(event) {
    this.endTime = event.timeStamp;
  },

  onTap(event) {
    const {
      currentTarget: {
        dataset: {
          index,
          url,
        } = {},
      } = {},
    } = event;

    const {
      activeTab = 0,
      imageDataList = [],
    } = this.data;
    const tabName = imageDataList[activeTab].title;

    if (this.endTime - this.startTime >= 350) {
      // 说明是长按，无需预览图片
      wx.reportAnalytics('long_press_image', {
        tab_name: tabName,
        index,
        url,
      });

      return;
    }

    wx.reportAnalytics('tap_image', {
      tab_name: tabName,
      index,
      url,
    });

    if (!url) {
      return;
    }

    wx.previewImage({
      urls: [url],
    });
  },

  onImageError(event) {
    const {
      target: {
        dataset: {
          url,
          index,
          tabIndex
        } = {},
      } = {},
    } = event;

    const { imageDataList } = this.data;
    wx.reportAnalytics('image_fail', {
      tab_name: imageDataList[tabIndex].title,
      index,
      url,
    });

    imageDataList[tabIndex].imageList[index].status = IMAGE_STATUS.FAIL;

    this.setData({ imageDataList });
  },

  subscribeNew() {
    wx.reportAnalytics('click_subscribe_message', { type: messageType });
    
    const self = this;
    wx.requestSubscribeMessage({
      tmplIds: [messageId],
      success: function(res) {
        wx.reportAnalytics('response_subscribe_message', { type: messageType, state: res[messageId] });

        if (res[messageId] === 'accept') {
          wx.showToast({
            title: '订阅成功',
            icon: 'success',
          });

          wx.cloud.callFunction({
            name: 'message',
            data: {
              type: 'subscribe',
              idList: [messageId],
            },
          });

          self.setData({
            showSubscribeBtn: false,
          });
        }
      },
      fail: function() {
        wx.showToast({
          title: '订阅失败',
          icon: 'error',
        });
      },
    })
  },
})
