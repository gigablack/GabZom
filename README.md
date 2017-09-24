# Gabzom

[Gabzom](https://github.com/gigablack/GabZom) es un proyecto clone de platzom, 
un idioma inventado para el curso de fundamentos de javascript de platzi.

## Descripcion del idioma

- si la palabra termina con "ar", se le quitan esas dos letras.
- si la palabra inicia con Z, se le añade "pe"  al final.
- si la palabra traducida tiene 10 o mas letras se debe partir en
dos y unir con un guion medio.
- por ultimo, si la palabra original es un palindromo,
ninguna regla anterior cuenta y se devuelve la misma palabra pero
intercalando letras mayusculas y minusculas.

## Instalación

```
npm install gabzom
```

## Uso

```
import gabzom from "gabzom"

gabzom("Programar") // Program
gabzom("Zorro") // Zorrope
gabzom("Zarpar") // Zarppe
gabzom("abecedario") // abece-dario
gabzom("sometemos") // SoMeTeMoS
```

## Creditos

[Gustavo Bethelmy](https://github.com/gigablack)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
