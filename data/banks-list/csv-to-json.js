const fs = require('fs')
const path = require('path')

const parse = require('csv-parse/lib/sync')
const csv = parse(fs.readFileSync(path.join(__dirname, 'banks.csv')).toString())
const en = require('../../web/src/i18n/en.json')

const missing = []

function getCountryCode(name) {
  switch (name) {
    case 'Ukrania': return 'UA'
    case 'United States': case 'USA': return 'US'
  }

  for (const key in en) {
    if (key.indexOf('COUNTRY_') === -1) {
      continue
    }

    const value = en[key]
    if (value === name) {
      return key.slice('COUNTRY_'.length)
    }
  }

  return ''
}

const lines = csv
  .slice(1)
  .map((row) => {
    const [companyName, countryName] = row
    const countryCode = getCountryCode(countryName)
    return { companyName, countryCode }
  })
  .filter(row => {
    if (row.countryCode) {
      return true
    }
    missing.push(row)
    return false
  })

fs.writeFileSync(path.join(__dirname, 'banks.json'), JSON.stringify(lines, null, 2))
fs.writeFileSync(path.join(__dirname, 'missing.json'), JSON.stringify(missing, null, 2))