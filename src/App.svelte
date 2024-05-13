<script lang="ts">
  let teamName = ''
  let error = ''
</script>

<main class="main-container">
  <form class="form-container" on:submit={async (e) => {
    e.preventDefault()
    const data = await fetch("/chili/isalive").then(res => res.json())

    console.log(data)

    if (teamName.length === 0) error = 'Du må sette et team navn'
    else error = ''
  }}>
    <div class="input-container">
      <label for="teamName">Team navn</label>
      <input type="text" id="teamName" bind:value={teamName}>
    </div>  

    {#if error}
      <p>{error}</p>
    {/if}

    <button class="submit-button" type="submit">Registrer team</button>
  </form>
</main>

<style>
  .main-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 15rem;
    gap: 1rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .submit-button {
    max-width: fit-content;
  }
</style>

