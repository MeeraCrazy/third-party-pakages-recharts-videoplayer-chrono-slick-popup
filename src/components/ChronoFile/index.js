import {Chrono} from 'react-chrono'

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
]

const ChronoFile = () => (
  <>
    <h1 className="heading">Chrono</h1>
    <div className="chrono-container">
      <Chrono items={items} mode="HORIZONTAL" />
    </div>
  </>
)

export default ChronoFile
