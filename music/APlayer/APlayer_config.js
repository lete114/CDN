const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true, //自动播放
    listFolded: true, //播放列表默认折叠
    listMaxHeight: 90, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
    preload: 'none', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    audio: [{
        name: '怎样（翻自 王天阳）',
        artist: '火羊瞌睡了',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/怎样/怎样（翻自 王天阳） -火羊瞌睡了.lrc',
        cover: 'https://p4.music.126.net/TToh27dNU5qxVvib2AWRCg==/109951164801137424.jpg?param=200y200',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/怎样/火羊瞌睡了 - 怎样（翻自 王天阳）.mp3'
    }, {
        name: '失落沙洲（抖音弹唱版）（翻自 徐佳莹）',
        artist: '火羊瞌睡了',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/失落沙洲/失落沙洲（抖音弹唱版）（翻自 徐佳莹） -火羊瞌睡了.lrc',
        cover: 'https://p1.music.126.net/0dhKwmLYiG7mzPfTIBicuA==/109951164865239902.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/失落沙洲/失落沙洲（抖音弹唱版）（翻自 徐佳莹）.mp3'
    }, {
        name: '夏天的风',
        artist: '火羊瞌睡了',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/夏天的风/夏天的风-火羊瞌睡了.lrc',
        cover: 'https://p1.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/夏天的风/火羊瞌睡了 - 夏天的风.mp3'
    }, {
        name: '再飞行',
        artist: '逃跑计划',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/再飞行/再飞行-逃跑计划.lrc',
        cover: 'https://p1.music.126.net/LOvc3fBVd5dcQSqZ_WuhzA==/109951163926976063.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/再飞行/再飞行 - 逃跑计划.mp3'
    }, {
        name: 'You Are Beautiful',
        artist: '刘沁',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/You Are Beautiful/You Are Beautiful-刘沁.lrc',
        cover: 'https://p2.music.126.net/ZxHks_33iIpUwa7p1hf1OQ==/18516875325298435.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/You Are Beautiful/You Are Beautiful.mp3'
    }, {
        name: '前前前世（Slow Ver.）',
        artist: '泠鸢yousa',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/前前前世/前前前世（Slow Ver.）-泠鸢yousa.lrc',
        cover: 'https://p1.music.126.net/78MY7YoxeJP0U2R6BSwwQQ==/109951162821535256.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/前前前世/前前前世.mp3'
    }, {
        name: '烟火里的尘埃',
        artist: '华晨宇',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/烟火里的尘埃/烟火里的尘埃',
        cover: 'https://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/烟火里的尘埃/烟火里的尘埃-华晨宇.mp3'
    }, {
        name: '浪子回头',
        artist: '王玉萌',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/浪子回头/浪子回头 (cover 茄子蛋)-王玉萌.lrc',
        cover: 'https://p1.music.126.net/RravRsCHEKyL_u__6EbULg==/109951163662101770.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/浪子回头/浪子回头.mp3'
    }, {
        name: 'BINGBIAN病变（原版）',
        artist: 'Cubi,Fi9江澈,Birck',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/病变/BINGBIAN病变（原版）-Cubi,Fi9江澈,Birck.lrc',
        cover: 'https://p2.music.126.net/3wSMVTdxeH2wN02yTxvhvw==/109951164388312861.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/病变/BINGBIAN病变（原版）.mp3'
    }, {
        name: 'BINGBIAN病变（女声版）',
        artist: '鞠文娴',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/病变女生版/BINGBIAN病变 (女声版)-鞠文娴.lrc',
        cover: 'https://p2.music.126.net/4TuBpyxVpbHnj2EMCSnW9w==/109951163176375492.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/病变女生版/病变.mp3'
    }, {
        name: '蝴蝶泉边（翻自 黄雅莉）',
        artist: '陈阳',
        lrc: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/蝴蝶泉边/蝴蝶泉边（翻自 黄雅莉） -陈阳.lrc',
        cover: 'https://p1.music.126.net/-xtgw3dRo6KzvgjF_lMHQw==/109951164203857288.jpg?param=130y130',
        url: 'https://cdn.jsdelivr.net/gh/lete114/CDN/music/蝴蝶泉边/蝴蝶泉边.mp3'
    }]
});