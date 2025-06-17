import { Validate } from "@/app/domain/features/validate"
import { RefObject } from "react"

export class FormField {
  element: any
  value: string | number = ''
  constructor(private readonly validators: Validate[]) { }

  subscribe(callback: Function) {
    const { tagName } = this.element
    if (tagName.toLowerCase() === 'input') {
      this.element.addEventListener('input', (e: any) => {
        for (const validator of this.validators) {
          const error = validator.validate(this.element.value)
          if (error.success === false) {
            this.element.classList.remove('focus:ring-2')
            this.element.classList.remove('focus:ring-teal-500')
            this.element.classList.remove('border-gry-300')
            this.element.classList.add('border-red-300')
            this.element.classList.add('focus:ring-red-500')
          } else {
            this.value = this.element.value
            this.element.classList.add('focus:ring-2')
            this.element.classList.add('focus:ring-teal-500')
            this.element.classList.add('border-gry-300')
            this.element.classList.remove('border-red-300')
            this.element.classList.remove('focus:ring-red-500')
          }
          return callback(this.element.value)
        }
      })
    }

  }

  on(event: string, callback: Function) {
    if (event === 'blur') {
      this.value = this.element.value
      this.element?.addEventListener('blur', (e: any) => callback(e.target.value))
    }
  }

  add<R extends HTMLElement>(element: RefObject<R>) {
    this.element = (element as any).current
    if (this.value) {
      this.setValue(this.value)
    }
  }

  setValue(value: any) {
    this.element.value = value
  }

  destroy() {
    const oldEl = this.element
    const newEl = oldEl.cloneNode(true)
    oldEl.parentNode.replaceChild(newEl, oldEl)
  }
}