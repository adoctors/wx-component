//index.js
Page({
    data: {
        initScore:2,
        score:''
    },
    getScore(e) {
        let score = e.detail;
        this.setData({
            score: score
        })
    },
})