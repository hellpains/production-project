type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
   return [
      cls,
      ...additional,
      Object.entries(mods)
         .filter(([cls, value]) => Boolean(value))
         .map(([key]) => key)
   ]
      .join(' ')
}

let res = classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])


