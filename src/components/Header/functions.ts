import { ITitleName, IColorProps } from 'interfaces/header';

export function changeTitleOfPage(title: ITitleName) {
  document.title = `${title.title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;
}

export function scrollPosition(setColorHeader: (type: IColorProps) => void) {
  document.addEventListener('scroll', () => {
    const targetPosition = 280;
    const position = window.scrollY;
    position >= targetPosition
      ? setColorHeader({ color: 'black' })
      : setColorHeader({ color: 'transparent' });
  });
  return () => {
    /*eslint-disable-next-line*/
    document.removeEventListener('scroll', () => {});
  };
}
