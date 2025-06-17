import { FormField } from "./form-field"

export class FormGroup {
  constructor(props: { [key: string]: FormField }) {
    for (const prop in props) {
      /*@ts-ignore*/
      this[prop] = props[prop]
    }
  }


  start () {
    for (const key of Object.keys(this)) {
      /*@ts-ignore*/
      const element = this[key]
      if (element.element) {
        element?.subscribe((v: any) => {})
      }
    }
  }
  
  destroy () {
    for (const key of Object.keys(this)) {
      /*@ts-ignore*/
      const element = this[key]
      if (element.element) {
        element?.subscribe((v: any) => {})
      }
    }
  }

  blur (callback: Function) {
    const keys = Object.keys(this)
    for (const key of keys) {
      /*@ts-ignore*/
      this[key as any].on('blur', callback)
    }
  }
  
}