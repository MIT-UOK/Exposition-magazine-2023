---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
     {
    avatar: '/images/sponsors/Evonsys.png',
    name: 'Evonsys',
    title: 'Co-Sponsor',
  },
  {
    avatar: '/images/sponsors/Garment.png',
    name: 'T&FG Group',
    title: 'Event Partner',
   
  },
   {
    avatar: '/images/sponsors/MAS.png',
    name: 'MAS Holding',
    title: 'Deluxe Partner',
  },
   {
    avatar: '/images/sponsors/Logo_Creative Software.png',
    name: 'Creative Software',
    title: 'Knowledge Partner',
  },
   {
    avatar: '/images/sponsors/Evonsys.png',
    name: 'Evonsys',
    title: 'Co-Sponsor',
  },
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Sponsors
    </template>
    <template #lead>
    Our team Coming together Is a beginning.Keeping together Is progress Working together Is success
    </template>
  </VPTeamPageTitle>
 <VPTeamMembers size="medium" :members="members" />
</VPTeamPage>
