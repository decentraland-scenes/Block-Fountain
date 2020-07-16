import { Button } from './button'

export class Console extends Entity {
  clickAnim: AnimationState
  constructor(
    transform: TranformConstructorArgs,
    parent: Entity,
    model: string,
    targetRing: number,
    button1Model: string,
    button1Anim: string,
    button2Model: string,
    button2Anim: string,
    button3Model: string,
    button3Anim: string,
    messagebus: MessageBus
  ) {
    super()
    engine.addEntity(this)
    this.setParent(parent)

    this.addComponent(new GLTFShape(model))
    this.addComponent(new Transform(transform))

    let button1 = new Button(button1Model, {}, button1Anim, this)
    let button2 = new Button(button2Model, {}, button2Anim, this)
    let button3 = new Button(button3Model, {}, button3Anim, this)

    button1.addComponent(
      new OnPointerDown(() => {
        button1.press()
        messagebus.emit('fountainAnim', { ring: targetRing, anim: 1 })
      })
    )

    button2.addComponent(
      new OnPointerDown(() => {
        button2.press()
        messagebus.emit('fountainAnim', { ring: targetRing, anim: 2 })
      })
    )

    button3.addComponent(
      new OnPointerDown(() => {
        button3.press()
        messagebus.emit('fountainAnim', { ring: targetRing, anim: 3 })
      })
    )
  }
}
