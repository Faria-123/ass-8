import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
const PhotoCard = ({ photo }) => {
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.image}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 150px) 20vw, 20vw"
                    alt={photo.name}
                    className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{photo.name}</h2>
            </div>

            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <p><FaHeart /></p>
                    <p>{photo.rating}</p>
                </div>

                <Separator orientation="vertical" />


                <div className="flex items-center gap-2">
                    <p><BiDownload /></p>
                    <p>{photo.price}</p>
                </div>
            </div>

            <Link href={`/all-photos/${photo.id}`}>      <Button variant="outline" className={'w-full'}>View</Button></Link>

        </Card>
    );
};

export default PhotoCard;