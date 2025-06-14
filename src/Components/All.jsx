import axios from 'axios';
import React, { useEffect } from 'react';

const name = [
    {
        name: "Rosetta Stone",
        image: "https://i.ibb.co/j2zQQwf/330px-Rosetta-Stone.jpg",
        context: "The Rosetta Stone, carved in 196 BC, was the key to deciphering Egyptian hieroglyphs. With inscriptions in three languages, it allowed scholars to unlock a lost civilization's language and culture.",
        discoveredAt: "1799",
        createdAt: "196 BC",
        description: "A trilingual decree stone that revolutionized Egyptology by enabling translation of hieroglyphs.",
        discoveredBy: "Pierre-François Bouchard",
        location: "British Museum, London",
        type: "Documents",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 124
    },
    {
        name: "Terracotta Army Spear",
        image: "https://i.ibb.co/vycwS83/qin-halberd.webp",
        context: "This bronze spear was buried with the Terracotta Army to guard China's first emperor, Qin Shi Huang, in the afterlife. It showcases early Chinese metallurgy and military organization.",
        discoveredAt: "1974",
        createdAt: "210 BC",
        description: "A ceremonial bronze spear representing Qin military strength and tomb rituals.",
        discoveredBy: "Local farmers",
        location: "Terracotta Warriors Museum, China",
        type: "Weapons",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 98
    },
    {
        name: "Dead Sea Scroll",
        image: "https://i.ibb.co/G3JwN94G/deadseascroll.jpg",
        context: "The Dead Sea Scrolls are ancient manuscripts that include biblical texts, apocrypha, and sectarian writings, offering deep insight into Jewish life and beliefs during the Second Temple period.",
        discoveredAt: "1947",
        createdAt: "150 BC",
        description: "A collection of ancient texts crucial to understanding Judaism and early Christianity.",
        discoveredBy: "Bedouin shepherds",
        location: "Israel Museum, Jerusalem",
        type: "Writings",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 137
    },
    {
        name: "Sumerian Cuneiform Tablet",
        image: "https://i.ibb.co/Q33Gj7XV/DP297593.jpg",
        context: "This tablet from ancient Mesopotamia contains cuneiform writing, one of the earliest known writing systems used for trade and administration.",
        discoveredAt: "1899",
        createdAt: "3100 BC",
        description: "An administrative clay tablet showing early human record-keeping.",
        discoveredBy: "German archaeologists",
        location: "Pergamon Museum, Berlin",
        type: "Writings",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 89
    },


    {
        name: "Celtic Torque",
        image: "https://i.ibb.co/wZKMb4Y7/celtic-torc-ring.jpg",
        context: "Torques were worn by high-ranking Celts and symbolized nobility and valor, often made of twisted gold or bronze.",
        discoveredAt: "1850",
        createdAt: "300 BC",
        description: "A golden neck ring showcasing ancient Celtic metallurgy and social status.",
        discoveredBy: "Scottish farmers",
        location: "National Museum of Scotland",
        type: "Tools",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 69
    },
    {
        name: "Zulu War Shield",
        image: "https://i.ibb.co/k64bTBq2/url-http-sothebys-brightspot-s3-amazonaws-com-media-desk-webnative-images-97-40-490a0a7749068855273f.jpg",
        context: "These cowhide shields were essential for Zulu warriors and symbolized both defense and cultural identity in pre-colonial southern Africa.",
        discoveredAt: "1920",
        createdAt: "1800 AD",
        description: "An oval war shield made from animal hide, used by Zulu fighters.",
        discoveredBy: "British military",
        location: "Durban Museum, South Africa",
        type: "Weapons",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 58
    },
    {
        name: "Paleolithic Hand Axe",
        image: "https://i.ibb.co/k64bTBq2/url-http-sothebys-brightspot-s3-amazonaws-com-media-desk-webnative-images-97-40-490a0a7749068855273f.jpg",
        context: "Among the oldest tools made by humans, hand axes represent the dawn of human innovation in survival and craftsmanship.",
        discoveredAt: "1933",
        createdAt: "40000 BC",
        description: "A prehistoric flint tool used for hunting and processing food.",
        discoveredBy: "French archaeologists",
        location: "Natural History Museum, Paris",
        type: "Tools",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 90
    },
    {
        name: "Persian Dagger",
        image: "https://i.ibb.co/JwhnXdfj/91-Wt54s-R52-L-AC-UF1000-1000-QL80.jpg",
        context: "This ornamental weapon from the Achaemenid Empire symbolizes Persian royalty and the empire’s skill in metalwork and design.",
        discoveredAt: "1910",
        createdAt: "500 BC",
        description: "A lavishly decorated ceremonial dagger from ancient Persia.",
        discoveredBy: "Iranian excavation team",
        location: "Tehran National Museum",
        type: "Weapons",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 73
    },
    {
        name: "Gutenberg Bible Page",
        image: "https://i.ibb.co/3m2sLVXW/images-q-tbn-ANd9-Gc-SOjb-OXw-Rgno-K0-BN-Qn-TAx-Jy-LA528-Hw-NRo-ZQ-s.jpg",
        context: "The Gutenberg Bible represents a revolution in knowledge dissemination as the first major book printed with movable type.",
        discoveredAt: "1897",
        createdAt: "1455 AD",
        description: "A rare surviving page from the first mass-produced book.",
        discoveredBy: "German book collector",
        location: "Morgan Library, New York",
        type: "Documents",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 105
    },
    {
        name: "Medieval Astrolabe",
        image: "https://i.ibb.co/NgDn0xCb/a-depiction-of-mariam-al-ijliya-a-famous-astrolabe-1437076290534-rs.jpg",
        context: "Astrolabes were used to determine time and position by early astronomers and navigators, showcasing medieval science and craftsmanship.",
        discoveredAt: "1908",
        createdAt: "1200 AD",
        description: "An astronomical instrument for solving problems related to time and the stars.",
        discoveredBy: "French astronomers",
        location: "Science Museum, London",
        type: "Tools",
        userEmail: "admin@gmail.com",
        userName: "Admin",
        likeCount: 87
    }
]

const All = () => {


    useEffect(() => {
        axios.post("http://localhost:3000/all", name)
            .then(res => console.log(res.data))
    }, [])



    return (
        <div>

        </div>
    );
};

export default All;