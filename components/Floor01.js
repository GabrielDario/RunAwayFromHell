import { ModelRoom } from './ModelRoom.js';

export function Floor01() {

  let floor = 1;
  let background = "../img/Floor01.png";
  return (

    <ModelRoom
      floor={floor}
       background={background}
    />
  );
}
