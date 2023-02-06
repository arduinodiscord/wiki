---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

import { contributors } from '../static/contributors'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      <div class="text-[#008184]">
        The Contributors
      </div>
    </template>
    <template #lead>
      The development of the Arduino Wiki is guided by an international
      team, some of whom have chosen to be featured below.<br>
        <br>
      Wiki developers are a group of people who are passionate about arduino  and all things electronic.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="contributors"
  />
  <!-- <VPTeamPageSection>
    <template #title>Contributors</template>
    <template #lead>Those who have actively contributed to development.<br> Community Support</template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection> -->
  <VPTeamPageSection>
    <template #title>Philosophy</template>
    <template #lead>
        The <a class="custom-links" href="/intro" target="_blank">guides</a> on this website include some of our teams own notes (not all of them are polished) that we disclose for other people to use.<br>
        <br>
        Here, we hope you may find something useful to you.<br>
        <br>
        We advocate the <a class="custom-links" href="https://en.wikipedia.org/wiki/Open-source_model" target="_blank">Open Source model</a>.<br>
        <br>
        This is why we strive to make our work open to other people for consultation, replication and reuse.
    </template>
  </VPTeamPageSection>
</VPTeamPage>
