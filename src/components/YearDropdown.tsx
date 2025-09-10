import React, { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'

interface YearDropdownProps {
  onChange?: (year: string) => void
}

const YearDropdown: React.FC<YearDropdownProps> = ({ onChange }) => {
  const currentYear = new Date().getFullYear()
  const startYear = 2019
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  )

  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(false)

  const handleChange = (year: string) => {
    setSelectedYear(year)
    setLoading(true) // show skeleton
    if (onChange) onChange(year)

    // Simulate async action (like fetching data)
    setTimeout(() => {
      setLoading(false) // hide skeleton after 1.5s
    }, 1500)
  }

  return (
    <div>
      <Select value={selectedYear} onValueChange={handleChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Pilih Tahun' />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default YearDropdown
