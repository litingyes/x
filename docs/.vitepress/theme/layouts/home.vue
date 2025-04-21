<script lang="ts" setup>
import { data as posts } from '../posts.data'
import { formatDate } from '../utils/format'

defineOptions({
  name: 'HomeLayout',
})
</script>

<template>
  <div class="flex items-center justify-center p-6">
    <div class="w-full max-w-3xl">
      <a
        v-for="(item, i) in posts"
        :key="i"
        role="link"
        class="block p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        :href="item.url"
      >
        <div class="text-xl font-semibold">{{ item.frontmatter.title }}</div>
        <p class="text-base">{{ item.frontmatter.description }}</p>
        <div class="text-sm">最近更新于 {{ formatDate(item.lastUpdated) }}</div>
      </a>
    </div>
  </div>
</template>
