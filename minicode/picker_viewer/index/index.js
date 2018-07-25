const app = getApp()

const date = new Date()
const years = []
const months = []
const days = []
const MinYear = 1990

for (let i = MinYear; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getUTCMonth() + 1,
    days: days,
    day: date.getDate(),
    value: [date.getFullYear() - MinYear, date.getUTCMonth(), date.getUTCDate() - 1],
  },
  bindChange: function (e) {
    const CurMultiIndex = e.detail.value
    console.log(CurMultiIndex)
    this.setData({
      year: this.data.years[CurMultiIndex[0]], // 第一列
      month: this.data.months[CurMultiIndex[1]], // 第二列
      day: this.data.days[CurMultiIndex[2]] // 第三列
    })
  }
})