import { useState, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Meeting {
  id: string
  date: Date
  time: string
  name: string
  extraInfo: string
}

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

export default function Booking() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [blockedTimes, setBlockedTimes] = useState<{ [key: string]: string[] }>(
    {}
  )
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  )
  const [name, setName] = useState('')
  const [extraInfo, setExtraInfo] = useState('')

  useEffect(() => {
    const savedMeetings = localStorage.getItem('meetings')
    const savedBlockedTimes = localStorage.getItem('blockedTimes')
    if (savedMeetings) setMeetings(JSON.parse(savedMeetings))
    if (savedBlockedTimes) setBlockedTimes(JSON.parse(savedBlockedTimes))
  }, [])

  useEffect(() => {
    localStorage.setItem('meetings', JSON.stringify(meetings))
    localStorage.setItem('blockedTimes', JSON.stringify(blockedTimes))
  }, [meetings, blockedTimes])

  const handleAddMeeting = () => {
    if (selectedDate && selectedTime && name) {
      const newMeeting: Meeting = {
        id: Date.now().toString(),
        date: selectedDate,
        time: selectedTime,
        name,
        extraInfo,
      }
      setMeetings([...meetings, newMeeting])
      setSelectedDate(undefined)
      setSelectedTime(undefined)
      setName('')
      setExtraInfo('')
    }
  }

  const handleBlockTime = () => {
    if (selectedDate && selectedTime) {
      const dateKey = selectedDate.toISOString().split('T')[0]
      setBlockedTimes((prev) => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), selectedTime],
      }))
      setSelectedTime(undefined)
    }
  }

  const getAvailableTimeSlots = (date: Date) => {
    const dateKey = date.toISOString().split('T')[0]
    const blockedTimesForDate = blockedTimes[dateKey] || []
    const meetingsForDate = meetings
      .filter((m) => m.date.toISOString().split('T')[0] === dateKey)
      .map((m) => m.time)
    return timeSlots.filter(
      (time) =>
        !blockedTimesForDate.includes(time) && !meetingsForDate.includes(time)
    )
  }

  return (
    <div className=" h-screen">
      <main className=" container mx-auto max-w-screen-md h-[85dvh] p-4">
        <h1 className="text-2xl font-bold mb-4">Agenda de Reuniones</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className=" ">
            <CardHeader>
              <CardTitle>Seleccionar Fecha</CardTitle>
            </CardHeader>
            <CardContent className="">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className=" md:w-fit md:px-10 rounded-md border"
              />
            </CardContent>
          </Card>
          <Card className=" ">
            <CardHeader>
              <CardTitle>Agendar Reunión</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedDate ? (
                  <div className="space-y-2">
                    <Label htmlFor="time">Horario disponible</Label>
                    <Select
                      onValueChange={setSelectedTime}
                      value={selectedTime}
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecciona un horario" />
                      </SelectTrigger>
                      <SelectContent className=" bg-white ">
                        {getAvailableTimeSlots(selectedDate).map((time) => (
                          <SelectItem
                            key={time}
                            value={time}
                            className=" cursor-pointer "
                          >
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="time-disabled">Horario disponible</Label>
                    <Select>
                      <SelectTrigger id="time-disabled" disabled>
                        <SelectValue placeholder="Selecciona un día" />
                      </SelectTrigger>
                    </Select>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre de la persona"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="extraInfo">Información adicional</Label>
                  <Textarea
                    id="extraInfo"
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    placeholder="Información adicional"
                  />
                </div>
                <div className="md:space-x-2">
                  <Button
                    onClick={handleAddMeeting}
                    disabled={!selectedDate || !selectedTime || !name}
                  >
                    Agendar Reunión
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleBlockTime}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Bloquear Horario
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Reuniones Agendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {meetings.map((meeting) => (
                <li key={meeting.id} className="bg-gray-100 p-2 rounded">
                  {meeting.date.toLocaleDateString()} - {meeting.time} -{' '}
                  {meeting.name}
                  {meeting.extraInfo && (
                    <p className="text-sm text-gray-600">{meeting.extraInfo}</p>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      {/* <Footer /> */}

     
    </div>
  )
}
