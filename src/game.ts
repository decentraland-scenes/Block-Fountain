import utils from '../node_modules/decentraland-ecs-utils/index'
import { Button } from './button'
import { Ring } from './ring'
import { Console } from './console'
import { RandomFountain } from './randomizer'

let sceneMessageBus = new MessageBus()

let rings: Ring[] = []

let base = new Entity()
base.addComponent(new GLTFShape('models/fountain/Base.glb'))
base.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
  })
)
engine.addEntity(base)

let ring1 = new Ring(
  {
    position: new Vector3(0, -0.75, 0),
  },
  'models/fountain/FirstRing.glb',
  '1stRing_Action_01',
  '1stRing_Action_02',
  '1stRing_Action_03',
  base
)

rings.push(ring1)

let ring2 = new Ring(
  {
    position: new Vector3(0, -0.8, 0),
  },
  'models/fountain/SecondRing.glb',
  '2ndRing_Action_01',
  '2ndRing_Action_02',
  '2ndRing_Action_03',
  base
)

rings.push(ring2)

let ring3 = new Ring(
  {
    position: new Vector3(0, -1, 0),
  },
  'models/fountain/ThirdRing.glb',
  '3rdRing_Action_01',
  '3rdRing_Action_02',
  '3rdRing_Action_03',
  base
)
rings.push(ring3)

let ring4 = new Ring(
  {
    position: new Vector3(0, -1, 0),
  },
  'models/fountain/FourthRing.glb',
  '4thRing_Action_01',
  '4thRing_Action_02',
  '4thRing_Action_03',
  base
)
rings.push(ring4)

let cyanConsole = new Console(
  { position: new Vector3(-23, 0, 0) },
  base,
  'models/buttons/Cyan/Base/BaseCyan.glb',
  3,
  'models/buttons/Cyan/Buttons/ButtonA_Cyan.glb',
  'ButtonA_Action',
  'models/buttons/Cyan/Buttons/ButtonB_Cyan.glb',
  'ButtonB_Action',
  'models/buttons/Cyan/Buttons/ButtonC_Cyan.glb',
  'ButtonC_Action',
  sceneMessageBus
)

let redConsole = new Console(
  {
    position: new Vector3(0, 0, 23),
    rotation: Quaternion.Euler(0, 90, 0),
  },
  base,
  'models/buttons/Red/Base/BaseRed.glb',
  2,
  'models/buttons/Red/Buttons/ButtonA_Red.glb',
  'ButtonA_Action',
  'models/buttons/Red/Buttons/ButtonB_Red.glb',
  'ButtonB_Action',
  'models/buttons/Red/Buttons/ButtonC_Red.glb',
  'ButtonC_Action',
  sceneMessageBus
)

let violetConsole = new Console(
  {
    position: new Vector3(23, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0),
  },
  base,
  'models/buttons/Violet/Base/BaseViolet.glb',
  1,
  'models/buttons/Violet/Buttons/ButtonA_Violet.glb',
  'ButtonA_Action',
  'models/buttons/Violet/Buttons/ButtonB_Violet.glb',
  'ButtonB_Action',
  'models/buttons/Violet/Buttons/ButtonC_Violet.glb',
  'ButtonC_Action',
  sceneMessageBus
)

let yellowConsole = new Console(
  { position: new Vector3(0, 0, -23), rotation: Quaternion.Euler(0, 270, 0) },
  base,
  'models/buttons/Yellow/Base/BaseYellow.glb',
  0,
  'models/buttons/Yellow/Buttons/ButtonA_Yellow.glb',
  'ButtonA_Action',
  'models/buttons/Yellow/Buttons/ButtonB_Yellow.glb',
  'ButtonB_Action',
  'models/buttons/Yellow/Buttons/ButtonC_Yellow.glb',
  'ButtonC_Action',
  sceneMessageBus
)

sceneMessageBus.on('fountainAnim', (e) => {
  fountainPlayer.playingMode = 0
  base.addComponentOrReplace(
    new utils.Delay(20000, () => {
      fountainPlayer.playingMode = 1
    })
  )
  switch (e.anim) {
    case 1:
      rings[e.ring].play1()
      break
    case 2:
      rings[e.ring].play2()
      break
    case 3:
      rings[e.ring].play3()
      break
  }
})

/// RANDOMIZER

let fountainPlayer = new RandomFountain(rings, 10)

engine.addSystem(fountainPlayer)
