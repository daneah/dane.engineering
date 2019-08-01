<template>
    <main>
        <h1>
            Talks
        </h1>
        <ul class="talk-list">
            <li>
                <h2>Adopt-a-pytest</h2>
                <h3>PyOhio 2019</h3>
                <p>
                    <code>pytest</code> is a testing framework that makes writing and running Python tests simpler.
                    Adopting new tooling in a large system is often a burden.
                    How can you introduce <code>pytest</code> gradually with minimal pain?
                </p>
                <p>
                    With its simplified syntax, powerful fixture behaviors, detailed test reports, and plugin-based architecture, <code>pytest</code> has a lot to offer.
                    Whether you're new to Python unit testing or you've been using <code>unittest</code> for a while, <code>pytest</code> may be something to consider.
                    It's not too hard to get up and running with <code>pytest</code> on a fresh project, but how can you retrofit an existing project without having to refactor the world all at once?
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/pyohio-2019.png')"
                        alt="PyOhio 2019"
                    />
                    <SpeakerDeckEmbed deck-id="22f01cc587cb451382bb62f93063cc67" />
                </div>
            </li>
            <li>
                <h2>Good Software Practices</h2>
                <h3>No Dogma Podcast</h3>
                <p>
                    Some of the important principles of software development discussed in <BaseLink href="https://bit.ly/the-python-pro" :external="true"><em>Practices of the Python Pro</em></BaseLink>.
                    Get a feel for the book as I run through the table of contents with Bryan.
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/no-dogma.jpg')"
                        alt="No Dogma podcast logo"
                    />
                    <p>
                        <BaseLink
                            href="https://nodogmapodcast.bryanhogan.net/123-dane-hillard-good-software-practices/"
                            :external="true"
                        >
                            Listen to the podcast
                        </BaseLink>
                    </p>
                </div>
            </li>
            <li>
                <h2>Hot for Teacher</h2>
                <h3>The Development Hell</h3>
                <p>
                    What does the process of writing a book look like?
                    What are the logistics with publishing and authoring?
                    What gaps does <BaseLink href="https://bit.ly/the-python-pro" :external="true"><em>Practices of the Python Pro</em></BaseLink> address?
                    Chris and Ed grill me on these questions and more.
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/the-dev-hell.png')"
                        alt="The Development Hell logo"
                    />
                    <p>
                        <BaseLink
                            href="https://devhell.info/post/2019-04-06/hot-for-teacher/"
                            :external="true"
                        >
                            Listen to the podcast
                        </BaseLink>
                    </p>
                </div>
            </li>

            <li>
                <h2>Non-traditional paths to software and the skills required</h2>
                <h3>Test & Code with Brian Okken</h3>
                <p>
                    We with experience and privilege who are able to teach should help our communities grow.
                    Underserved, underrepresented, and non-normative groups need access to high-quality resources.
                    The more we can democratize software development knowledge, the more empathy we can deliver.
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/test-and-code.jpg')"
                        alt="Test & Code logo"
                    />
                    <p>
                        <BaseLink
                            href="https://testandcode.com/70"
                            :external="true"
                        >
                            Listen to the podcast
                        </BaseLink>
                      </p>
                </div>
            </li>

            <li>
                <h2>Multiple Inheritance and Mixins</h2>
                <h3>PyCaribbean 2019</h3>
                <p>
                    Start with old- and new-style classes and inheritance.
                    Then learn about multiple inheritance, method resolution order, and mixins.
                    Finish with a few practical mixin examples.
                    Inspired by <BaseLink href="https://easyaspython.com/mixins-for-fun-and-profit-cb9962760556" :external="true">Mixins for Fun and Profit</BaseLink>.
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/pycaribbean-2019.png')"
                        alt="PyCaribbean 2019"
                    />
                    <SpeakerDeckEmbed deck-id="3dbcdf7b6a974a1c9bfef291650a9f70" />
                </div>
            </li>

            <li>
                <h2>Serverless Django with Zappa</h2>
                <h3>DjangoCon US 2018</h3>
                <p>
                    Remove the burden of infrastructure management from your Django applications by going serverless.
                    Use the Zappa framework to run your Django application as an Amazon Web Services Lambda function.
                    See how to offload everything but the database into managed solutions so that you can tackle the application itself.
                </p>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/djangocon-us-2018.png')"
                        alt="DjangoCon US 2018"
                    />
                    <YouTubeEmbed video-id="ZfynWM4-jFE" />
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import ResponsiveImage from '@/components/ResponsiveImage'
import SpeakerDeckEmbed from '@/components/SpeakerDeckEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'

const PAGE_TITLE = 'Talks'
const PAGE_DESCRIPTION = 'Django and Python Conference talks by Dane Hillard'

export default {
  name: 'Talks',
  components: {
    BaseLink,
    ResponsiveImage,
    SpeakerDeckEmbed,
    YouTubeEmbed,
  },
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title',
      },
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description',
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description',
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.talk-list {
  list-style: none;

  h3 {
    margin-top: var(--space-xs);
  }

  li:not(:first-child) {
    h2 {
      margin-top: var(--space-lg);
    }
  }
}

.talk-instance__visuals {
  display: grid;
  grid-template-columns: 100px minmax(250px, 700px);
  grid-gap: var(--space-md);

  p:first-of-type {
    margin-top: 0;
  }
}
</style>
