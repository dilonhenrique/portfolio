import { DefaultTheme } from "styled-components";
import { ThemeTypographyVariants } from "./theme";

export function getVariantFromTheme(theme: DefaultTheme, variant: ThemeTypographyVariants) {
  const retorno = {} as any;
  if (!variant || !(variant in theme.typography?.variants)) variant = 'body2';

  for (let key in theme.typography.variants[variant]) {
    const item = theme.typography.variants[variant][key];
    if (typeof item === 'object') {
      retorno[key] = item.xs || item.md;
      for (let size in item) {
        if(size in theme.breakpoints){
          retorno[`@media (min-width: ${theme.breakpoints[size]}px)`] = {
            [key]: item[size],
          };
        }
      }
    } else {
      retorno[key] = item;
    }
  }
  return retorno;
}

function getMediaQueries(item: any){

}
