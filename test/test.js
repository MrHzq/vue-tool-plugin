'use strict'
const expect = require('chai').expect
const toolMethods = require('../dist/tool-methods.js')

describe('对象深拷贝方法：copy', () => {
    it('结果：不相等，false', () => {
        const oldObj = { name: 'hzq' }
        const result = toolMethods.default.copy(oldObj)
        expect(result).to.deep.equal(oldObj)
    })
})

describe('将值转为%或rem方法：rem', () => {
    it('结果：0rem', () => {
        const result = toolMethods.default.rem()
        expect(result).to.equal('0rem')
    })
})

describe('将值转为%或px方法：px', () => {
    it('结果：0px', () => {
        const result = toolMethods.default.px()
        expect(result).to.equal('0px')
    })
})

// describe('日期格式化方法：fdate', () => {
//     it('结果：2019-07-31 15:48:45', () => {
//         const result = toolMethods.default.fdate(1564559325663)
//         expect(result).to.equal('2019-07-31 15:48:45')
//     })
// })

describe('将地址参数转为对象：fquery', () => {
    it('结果：{ a: 1, b: 2, c: 3 }', () => {
        const result = toolMethods.default.fquery('a=1&b=2&c=3')
        expect(result).to.deep.equal({ a: '1', b: '2', c: '3' })
    })
})

describe('金额格式化：fprice', () => {
    it('结果：0.00', () => {
        const result = toolMethods.default.fprice()
        expect(result).to.deep.equal('0.00')
    })

    it('结果：123,456.700', () => {
        const result = toolMethods.default.fprice(123456.7, 3)
        expect(result).to.deep.equal('123,456.700')
    })

    it('结果：123,456.789', () => {
        const result = toolMethods.default.fprice(123456.7899, 3)
        expect(result).to.deep.equal('123,456.789')
    })
})

describe('数量 以万为单位显示：fnum', () => {
    it('结果：0', () => {
        const result = toolMethods.default.fnum()
        expect(result).to.deep.equal(0)
    })

    it('结果：12.34万', () => {
        const result = toolMethods.default.fnum(123456.7)
        expect(result).to.deep.equal('12.34万')
    })
})

describe('身份证格式验证：checkCardID', () => {
    it('结果：true', () => {
        const result = toolMethods.default.checkCardID('513822199410253197')
        expect(result).to.deep.equal(true)
    })

    it('结果：false', () => {
        const result = toolMethods.default.checkCardID('13402318457')
        expect(result).to.deep.equal(false)
    })
})

describe('手机号格式验证：checkPhone', () => {
    it('结果：false', () => {
        const result = toolMethods.default.checkPhone('513822199410253197')
        expect(result).to.deep.equal(false)
    })

    it('结果：true', () => {
        const result = toolMethods.default.checkPhone('13402318457')
        expect(result).to.deep.equal(true)
    })
})

describe('验证值是否为空：checkValEmpty', () => {
    it('结果：false', () => {
        const result = toolMethods.default.checkValEmpty('513822199410253197')
        expect(result).to.deep.equal(false)
    })

    it('结果：true', () => {
        const result = toolMethods.default.checkValEmpty()
        expect(result).to.deep.equal(true)
    })

    it('结果：{} true', () => {
        const result = toolMethods.default.checkValEmpty({})
        expect(result).to.deep.equal(true)
    })
    it('结果：[] true', () => {
        const result = toolMethods.default.checkValEmpty([])
        expect(result).to.deep.equal(true)
    })
    it('结果：null true', () => {
        const result = toolMethods.default.checkValEmpty(null)
        expect(result).to.deep.equal(true)
    })
})
