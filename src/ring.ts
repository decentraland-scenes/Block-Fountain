export class Ring extends Entity {
  animation1: AnimationState
  animation2: AnimationState
  animation3: AnimationState

  constructor(
    transform: TranformConstructorArgs,
    model: string,
    animation1: string,
    animation2: string,
    animation3: string,
    parent: Entity
  ) {
    super()
    engine.addEntity(this)
    this.setParent(parent)

    this.addComponent(new GLTFShape(model))
    this.addComponent(new Transform(transform))

    this.addComponent(new Animator())

    this.animation1 = new AnimationState(animation1, { looping: false })
    this.getComponent(Animator).addClip(this.animation1)
    this.animation2 = new AnimationState(animation2, { looping: false })
    this.getComponent(Animator).addClip(this.animation2)
    this.animation3 = new AnimationState(animation3, { looping: false })
    this.getComponent(Animator).addClip(this.animation3)
  }
  public play1(): void {
    log('playing1')

    this.animation1.play(true)
  }
  public play2(): void {
    log('playing2')

    this.animation2.play(true)
  }
  public play3(): void {
    log('playing3')

    this.animation3.play(true)
  }
}
