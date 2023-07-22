<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function formDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}
</script>

<hgroup>
	<h1>{data.title}</h1>
	<h2>{formDate(data.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.content}
</div>
