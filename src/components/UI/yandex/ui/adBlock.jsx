import React from "react";
import Image from "../common/image";
import Link from "../common/link";

/**
 * Рекламный баннер
 */
const AdBlock = ({ img, link }) => {
  return (
    <Link href={link}>
      <Image src={img}></Image>
    </Link>
  );
};
