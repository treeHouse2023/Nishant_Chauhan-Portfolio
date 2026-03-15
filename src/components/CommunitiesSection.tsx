import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Trophy, Heart, Rocket, Camera, Lightbulb } from "lucide-react";

const communityItems = [
{
id:1,
title:"Social Media Manager",
organization:"GDG On Campus DAV University",
type:"Leadership",
image:"/google.jpg",
description:"Led digital marketing and content strategy for GDG tech events including DevFest.",
highlights:[
"Managed social media campaigns",
"Promoted tech events & workshops",
"400+ student engagement"
],
icon:Rocket,
color:"from-primary to-secondary",
size:"large"
},

{
id:2,
title:"Vice President",
organization:"Anubhav Club – DAV University",
type:"Leadership",
image:"/partcipate.jpg",
description:"Coordinated university events and managed student teams while leading club activities.",
highlights:[
"Event coordination",
"Student team leadership",
"Campus engagement"
],
icon:Users,
color:"from-secondary to-accent",
size:"medium"
},

{
id:3,
title:"Crowdfunding Volunteer",
organization:"Muskurahat Foundation",
type:"Community",
image:"/clubb.jpg",
description:"Supported fundraising campaigns for underprivileged children through digital outreach.",
highlights:[
"Donor engagement",
"Storytelling campaigns",
"Fundraising support"
],
icon:Heart,
color:"from-rose-500 to-pink-600",
size:"medium"
},

{
id:4,
title:"Student Council Member",

type:"Leadership",
image:"/vc pic.jpg",
description:"Planned and organized university fests, promotional campaigns and student activities.",
highlights:[
"Campus event planning",
"Student coordination",

],
icon:Users,
color:"from-violet-500 to-purple-600",
size:"small"
},

{
id:5,
title:"NSS Volunteer",
organization:"DAV University",
type:"Community",
image:"https://imgs.search.brave.com/3r84ElhDa3s2pX8zKnop9pqgQYbi8tB00NfxSpath6U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRiL05h/dGlvbmFsX1NlcnZp/Y2VfU2NoZW1lX2xv/Z28uc3ZnLzUxMnB4/LU5hdGlvbmFsX1Nl/cnZpY2VfU2NoZW1l/X2xvZ28uc3ZnLnBu/Zw",
description:"Participated in health camps and social awareness initiatives for community development.",
highlights:[
"Health camps",
"Community awareness drives",
"NSS quiz gold medal"
],
icon:Heart,
color:"from-amber-500 to-yellow-600",
size:"small"
},

{
id:6,
title:"Innovation Council Member",
organization:"Institution’s Innovation Council (IIC)",
type:"Innovation",
image:"/innovation.jpg",
description:"Promoted entrepreneurship and innovation initiatives within the university ecosystem.",
highlights:[
"Startup initiatives",
"Innovation events",
"Entrepreneurship programs"
],
icon:Lightbulb,
color:"from-emerald-500 to-green-600",
size:"large"
},

{
id:7,
title:"Freelance Content Creator",
organization:"YouTube & Instagram",
type:"Creative",
image:"/creator.jpg",
description:"Created educational and promotional video content collaborating with brands.",
highlights:[
"Video production",
"Content marketing",
"Brand collaborations"
],
icon:Camera,
color:"from-cyan-500 to-teal-600",
size:"medium"
},

{
id:8,
title:"Hackathon & Competition Winner",
organization:"University & National Events",
type:"Achievement",
image:"/hack win.jpg",
description:"Won multiple competitions including hackathons, business pitch events and national leaderboards.",
highlights:[
"Hackathon winner",
"Business pitch champion",
"National leaderboard rank"
],
icon:Trophy,
color:"from-orange-500 to-red-600",
size:"small"
}
];

function CommunityCard({ item, index }) {

const ref = useRef(null);
const isInView = useInView(ref,{ once:true, margin:"-50px"});
const [isHovered,setIsHovered] = useState(false);

const sizeClasses = {
large:"md:col-span-2 md:row-span-2",
medium:"md:col-span-1 md:row-span-2",
small:"md:col-span-1 md:row-span-1"
};

return (

<motion.div
ref={ref}
initial={{opacity:0,scale:0.9}}
animate={isInView ? {opacity:1,scale:1} : {}}
transition={{duration:0.5,delay:index*0.08}}
onMouseEnter={()=>setIsHovered(true)}
onMouseLeave={()=>setIsHovered(false)}
className={`group relative ${sizeClasses[item.size]}`}
>

<div className="glass rounded-2xl overflow-hidden h-full card-interactive">

<div className="relative h-full min-h-[250px] overflow-hidden">

<motion.img
src={item.image}
alt={item.title}
className="w-full h-full object-cover"
animate={{scale:isHovered?1.1:1}}
transition={{duration:0.6}}
/>

<div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40 mix-blend-multiply ${isHovered?"opacity-60":""}`} />

<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"/>

<motion.div
initial={{opacity:0,x:-20}}
animate={isInView?{opacity:1,x:0}:{ }}
transition={{delay:index*0.08+0.2}}
className="absolute top-4 left-4"
>
<span className={`px-3 py-1.5 text-xs font-semibold bg-gradient-to-r ${item.color} text-white rounded-full`}>
{item.type}
</span>
</motion.div>

<motion.div
initial={{scale:0}}
animate={isInView?{scale:1}:{ }}
transition={{delay:index*0.08+0.3,type:"spring",stiffness:200}}
className="absolute top-4 right-4"
>
<div className="w-12 h-12 rounded-xl bg-background/90 flex items-center justify-center shadow-lg">
<item.icon className="w-6 h-6 text-primary"/>
</div>
</motion.div>

<div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">

<p className="text-body-sm text-foreground/70 mb-1">
{item.organization}
</p>

<h3 className="text-heading-lg md:text-heading-xl mb-2">
{item.title}
</h3>

<motion.p
initial={{height:0,opacity:0}}
animate={{height:isHovered?"auto":0,opacity:isHovered?1:0}}
className="text-muted-foreground text-body-sm mb-3 overflow-hidden"
>
{item.description}
</motion.p>

<div className="flex flex-wrap gap-2">

{item.highlights.map((highlight,i)=>(
<span
key={highlight}
className="px-2.5 py-1 text-xs bg-background/80 rounded-full text-foreground/80"
>
{highlight}
</span>
))}

</div>

</div>

</div>

</div>

</motion.div>
);
}

export function CommunitiesSection(){

const headerRef = useRef(null);
const isHeaderInView = useInView(headerRef,{once:true});

return (

<section id="communities" className="section-padding bg-surface-elevated relative overflow-hidden">

<div className="container mx-auto px-4 relative z-10">

<motion.div
ref={headerRef}
initial={{opacity:0,y:30}}
animate={isHeaderInView?{opacity:1,y:0}:{ }}
transition={{duration:0.6}}
className="text-center mb-16"
>

<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary mb-6">
<Users className="w-8 h-8 text-white"/>
</div>

<span className="block text-secondary text-body-sm font-semibold uppercase tracking-wider mb-2">
Beyond the Resume
</span>

<h2 className="text-display-sm md:text-display-md font-display mb-4">
Leadership, Communities & <span className="text-gradient">Campus Life</span>
</h2>

<p className="text-muted-foreground text-body-lg max-w-3xl mx-auto">
Growth happens beyond classrooms. Through clubs, volunteering and initiatives,
I've learned to lead, collaborate and create real impact.
</p>

</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
{communityItems.map((item,index)=>(
<CommunityCard key={item.id} item={item} index={index}/>
))}
</div>

</div>

</section>

);
}