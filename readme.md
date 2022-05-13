# IonSelect Bug - Screen Readers read placeholder text instead of ion-label

This repo demonstrates a bug where the `placeholder` value is used by screen readers instead of `ion-label` for `ion-select`. This is a simple starter tabs project.

Steps to reproduce:

```bash
npm i
ionic serve
```

- Ensure that you have a screen reader enabled.
- Open Tab 2
- Tab to the ion-select element
- Screen reader will read the value set for the placeholder
- **Expected**: Screen reader would read the 'Gaming' - the value that's defined as the `ion-label`

```html
 <ion-item>
      <ion-label>Gaming</ion-label>
      <ion-select placeholder="This placeholder is read as the label">
        <ion-select-option value="nes">NES</ion-select-option>
        <ion-select-option value="n64">Nintendo64</ion-select-option>
        <ion-select-option value="ps">PlayStation</ion-select-option>
        <ion-select-option value="genesis">Sega Genesis</ion-select-option>
        <ion-select-option value="saturn">Sega Saturn</ion-select-option>
        <ion-select-option value="snes">SNES</ion-select-option>
      </ion-select>
    </ion-item>
```
