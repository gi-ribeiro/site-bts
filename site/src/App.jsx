import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const albums = [ 
    
 {
     title: "2 Cool 4 Skool",
     description: "Álbum de estreia do BTS, com o icônico 'No More Dream'.",
     image: "https://i.scdn.co/image/ab67616d0000b2732666df197eac73ae823e1e67",
 },
{
     title: "O!RUL8,2?",
     description: "Continuação da estreia, com destaque para 'N.O'.",
     image: "https://i.scdn.co/image/ab67616d00001e02440d112131cfc66bbdaafe1a",
 },
{
     title: "Skool Luv Affair",
     description: "Com faixas como 'Boy in Luv' e 'Just One Day'.",
     image: "https://i.scdn.co/image/ab67616d0000b273ab9433cc4b9cda9431be879a",
 },
{ 
     title: "Dark & Wild",
     description: "Primeiro álbum completo, com 'Danger' e 'War of Hormone'.",
     image: "https://i.scdn.co/image/ab67616d00001e02abe7090bc3ae94d741dfaf6b",
 },
{ 
     title: "The Most Beautiful Moment in Life, Part 1",
     description: "Inclui a poderosa 'I Need U'.",
     image: "https://i.scdn.co/image/ab67616d0000b2731504edb7a9a5e4e64547fb94",
 }, 
{
     title: "The Most Beautiful Moment in Life, Part 2",
      description: "Continuação com a marcante 'Run'.",
     image: "https://i.scdn.co/image/ab67616d0000b273a5e9b18ada0905fa82cd4756",
 },
{
     title: "The Most Beautiful Moment in Life: Young Forever",
     description: "Compilação com faixas novas como 'Fire' e 'Save Me'.",
     image: "https://i.scdn.co/image/ab67616d0000b273c6dbc63cf145b4ff6bee3322",
 }, 
 {
    
     title: "Wings",
     description: "Com solos dos membros e o hit 'Blood Sweat & Tears'.",
     image: "https://i.scdn.co/image/ab67616d0000b2738bd5d941f9ced8e7f9c60dd4",
},
 {
     title: "You Never Walk Alone",
     description: "Repackage do Wings, com 'Spring Day' e 'Not Today'.",
     image: "https://i.scdn.co/image/ab67616d0000b2731fd0a8fc28b2a0a5d9cdc6c6", 
},
 { 
     title: "Love Yourself: Her",
     description: "Início da era Love Yourself com 'DNA'.", 
     image: "https://i.scdn.co/image/ab67616d0000b273829305487c8f3b96a1d955b3",
},
 { 
     title: "Love Yourself: Tear",
     description: "Álbum com o poderoso 'Fake Love'.",
     image: "https://i.scdn.co/image/ab67616d0000b2738fbcf6544ff02a8959a81781",
}, 
 { 
     title: "Love Yourself: Answer",
     description: "Compilação com 'IDOL' e outras faixas icônicas.",
     image: "https://i.scdn.co/image/ab67616d0000b2733825e6d4d02e4b4c0cec7e1d", 
}, 
 {
     title: "Map of the Soul: Persona",
     description: "Inclui o sucesso mundial 'Boy With Luv'.",
     image: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
 },
 {
     title: "Map of the Soul: 7",
     description: "Um dos álbuns mais completos do BTS, com faixas como 'ON' e 'Black Swan'.",
     image: "https://i.scdn.co/image/ab67616d0000b273505190077497c230422f2934", 
}, 
 { 
       title: "BE",
     description: "Um álbum íntimo e emocional lançado durante a pandemia, incluindo o hit 'Life Goes On'.",
     image: "https://i.scdn.co/image/ab67616d0000b273c07d5d2fdc02ae252fcd07e5", 
}, 
 {  
     title: "Proof",
      description: "Compilação antológica com inéditas como 'Yet To Come'.",
     image: "https://i.scdn.co/image/ab67616d0000b27317db30ce3f081d6818a8ad49", 
},
];

export default function App() {
     return (
         <div className="p-4 min-h-screen bg-purple-100">
             <div className="col-span-full text-center mb-6">
                 <h1 className="text-3xl font-bold mb-2">Recomendações de Álbuns do BTS</h1>
                  <img
                  src="https://i.scdn.co/image/ab6761610000e5ebd642648235ebf3460d2d1f6a"
                  alt="BTS Logo"
                  className="mx-auto w-32 h-auto my-4"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {albums.map((album, index) => (
                         <Card key={index} className="shadow-xl rounded-2xl border-2 border-purple-700 bg-white">
                            <img src={album.image} alt={album.title} className="w-full h-64 object-cover rounded-t-2xl" />
                            <CardContent className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{album.title}</h2> 
                                <p className="text-sm mb-4">{album.description}</p>
                                <Button variant="outline">Saiba mais</Button>
                             </CardContent>
                            </Card>
                            ))}
                            </div>
                            </div>
                            );
                        }