// pages/mycom/mycom.js
Page({});
Component({
    properties:{
        initscore:{
            type:Number,
            value:0
        }
    },
    data: {
        list: [{
                clas: '',
                flag: true,
                score: 1
            },
            {
                clas: 'snow2',
                flag: true,
                score: 2
            },
            {
                clas: 'snow3',
                flag: true,
                score: 3
            },
            {
                clas: 'snow4',
                flag: true,
                score: 4
            },
            {
                clas: 'snow5',
                flag: true,
                score: 5
            }
        ],
        is1: false,  
        score:0
    },
    methods: {
        checked(e) {
            let i = e.currentTarget.dataset.index,
                option1, option2;
            // 重置所有的选项
            for (let n = 0; n <= 4; n++) {
                option1 = "list[" + n + "].flag"
                this.setData({
                    [option1]: true
                })
            }
            let option0 = "list[0].flag";
            if (i == 0) {
                if (!this.data.is1) {
                    this.setData({
                        [option0]: false,
                        is1: true,
                        score:1
                    })
                } else {
                    this.setData({
                        [option0]: true,
                        is1: false,
                        score:0
                    })
                }
            } else {
                for (let j = 0; j <= i; j++) {
                    option2 = "list[" + j + "].flag"
                    this.setData({
                        [option2]: false,
                        is1: false,
                        score:this.data.list[i].score
                    })
                }
            }
            this.triggerEvent('getscoreevent',this.data.score)  
        },
    },
    attached: function() {
        // 初始得分
        let f = Math.round(this.data.initscore),
            optioninit;
        for (let j = 0; j < f; j++) {
            optioninit = "list[" + j + "].flag"
            this.setData({
                [optioninit]: false,
                is1: false
            })
        }
    }
})