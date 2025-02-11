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
import { Loader2 } from 'lucide-react'

interface CalendlyEvent {
  uri: string
  start_time: string
  end_time: string
}

export default function Component() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [availableSlots, setAvailableSlots] = useState<CalendlyEvent[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(
    undefined
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [extraInfo, setExtraInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isScheduling, setIsScheduling] = useState(false)

  const calendlyUser = 'marco-inmoboost' // Replace with your Calendly username
  const calendlyToken =
    'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzMxNjIzNzk0LCJqdGkiOiJjNjY2MzJlYS0xNWQxLTRhMjEtYjA1My00OTBiY2EwZjA4YzIiLCJ1c2VyX3V1aWQiOiJlZjViYTBlYy01N2JlLTQ5ZGQtOGNlNy00YzZiZTA0NjcyMjQifQ.ZXzvRmDg4mX_16vxXZUT9lYtVYQPHTxkh9u-n3NlolR2xj16DEtjHeKaiGqdtTLSxhn4-1Lug7bhDX5BrqVsDg' // Replace with your Calendly API token

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate)
    }
  }, [selectedDate])

  const fetchAvailableSlots = async (date: Date) => {
    setIsLoading(true)
    const startTime = new Date(date)
    startTime.setHours(0, 0, 0, 0)
    const endTime = new Date(date)
    endTime.setHours(23, 59, 59, 999)

    try {
      const response = await fetch(
        `https://api.calendly.com/scheduled_events?user=${calendlyUser}&min_start_time=${startTime.toISOString()}&max_start_time=${endTime.toISOString()}&status=active`,
        {
          headers: {
            Authorization: `Bearer ${calendlyToken}`,
          },
        }
      )

      const data = await response.json()
      console.log('data response', data)
      setAvailableSlots(data.collection)
    } catch (error) {
      console.error('Error fetching available slots:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleScheduleMeeting = async () => {
    if (!selectedSlot || !name || !email) return

    setIsScheduling(true)
    try {
      const response = await fetch(
        'https://api.calendly.com/scheduling_links',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${calendlyToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            max_event_count: 1,
            owner: `https://api.calendly.com/users/${calendlyUser}`,
            event_type: selectedSlot,
            start_time: new Date(selectedSlot).toISOString(),
            name,
            email,
            custom_questions: [
              {
                name: 'Additional Information',
                value: extraInfo,
              },
            ],
          }),
        }
      )

      const data = await response.json()
      window.open(data.booking_url, '_blank')
    } catch (error) {
      console.error('Error scheduling meeting:', error)
    } finally {
      setIsScheduling(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Agenda de Reuniones con Calendly
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Seleccionar Fecha</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Agendar Reunión</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Cargando horarios disponibles...</span>
                </div>
              ) : (
                selectedDate && (
                  <div className="space-y-2">
                    <Label htmlFor="time">Horario disponible</Label>
                    <Select
                      onValueChange={setSelectedSlot}
                      value={selectedSlot}
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecciona un horario" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSlots.map((slot) => (
                          <SelectItem key={slot.uri} value={slot.uri}>
                            {new Date(slot.start_time).toLocaleTimeString()} -{' '}
                            {new Date(slot.end_time).toLocaleTimeString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )
              )}
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="extraInfo">Información adicional</Label>
                <Textarea
                  id="extraInfo"
                  value={extraInfo}
                  onChange={(e) => setExtraInfo(e.target.value)}
                  placeholder="Información adicional para la reunión"
                />
              </div>
              <Button
                onClick={handleScheduleMeeting}
                disabled={!selectedSlot || !name || !email || isScheduling}
              >
                {isScheduling ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Agendando...
                  </>
                ) : (
                  'Agendar Reunión'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
