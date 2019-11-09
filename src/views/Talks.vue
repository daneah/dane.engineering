<template>
    <main>
        <h1>Talks</h1>

        <ul class="talk-list">
            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Using a custom template loader at scale</template>
                    <template #subtitle>DjangoCon US 2019</template>
                    <template #description>
                        <p>
                            You can reuse Django templates with the <code>{% include %}</code> tag.
                            But what if you need to share a template across multiple projects?
                            Learn how we built a custom template loader to ship template changes&mdash;all without deploying any code.
                        </p>
                    </template>
                    <template #visuals>
                        <ResponsiveImage
                            :src="require('@/assets/djangocon-us-2019.jpg')"
                            alt="DjangoCon US 2018"
                        />
                        <YouTubeEmbed video-id="pocIpg1FZ3c" />
                    </template>
                </Talk>
            </li>

            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Adopt-a-pytest</template>
                    <template #subtitle>PyOhio 2019</template>
                    <template #description>
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
                    </template>
                    <template #visuals>
                        <ResponsiveImage
                            :src="require('@/assets/pyohio-2019.png')"
                            alt="PyOhio 2019"
                        />
                        <SpeakerDeckEmbed deck-id="22f01cc587cb451382bb62f93063cc67" />
                    </template>
                </Talk>
            </li>

            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Good Software Practices</template>
                    <template #subtitle>No Dogma Podcast</template>
                    <template #description>
                        <p>
                            Some of the important principles of software development discussed in <BaseLink href="https://bit.ly/the-python-pro" :external="true"><em>Practices of the Python Pro</em></BaseLink>.
                            Get a feel for the book as I run through the table of contents with Bryan.
                        </p>
                    </template>
                    <template #visuals>
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
                    </template>
                </Talk>
            </li>
            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Hot for Teacher</template>
                    <template #subtitle>The Development Hell</template>
                    <template #description>
                        <p>
                            What does the process of writing a book look like?
                            What are the logistics with publishing and authoring?
                            What gaps does <BaseLink href="https://bit.ly/the-python-pro" :external="true"><em>Practices of the Python Pro</em></BaseLink> address?
                            Chris and Ed grill me on these questions and more.
                        </p>
                    </template>
                    <template #visuals>
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
                    </template>
                </Talk>
            </li>

            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Non-traditional paths to software and the skills required</template>
                    <template #subtitle>Test & Code with Brian Okken</template>
                    <template #description>
                        <p>
                            We with experience and privilege who are able to teach should help our communities grow.
                            Underserved, underrepresented, and non-normative groups need access to high-quality resources.
                            The more we can democratize software development knowledge, the more empathy we can deliver.
                        </p>
                    </template>
                    <template #visuals>
                      <ResponsiveImage
                          :src="require('@/assets/test-and-code.jpg')"
                          alt="Test & Code logo"
                      />
                      <p class="talk-list__talk__description">
                          <BaseLink
                              href="https://testandcode.com/70"
                              :external="true"
                          >
                              Listen to the podcast
                          </BaseLink>
                      </p>
                    </template>
                </Talk<
            </li>

            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Multiple Inheritance and Mixins</template>
                    <template #subtitle>PyCaribbean 2019</template>
                    <template #description>
                        <p>
                            Start with old- and new-style classes and inheritance.
                            Then learn about multiple inheritance, method resolution order, and mixins.
                            Finish with a few practical mixin examples.
                            Inspired by <BaseLink href="https://easyaspython.com/mixins-for-fun-and-profit-cb9962760556" :external="true">Mixins for Fun and Profit</BaseLink>.
                        </p>
                    </template>
                    <template #visuals>
                        <ResponsiveImage
                            :src="require('@/assets/pycaribbean-2019.png')"
                            alt="PyCaribbean 2019"
                        />
                        <SpeakerDeckEmbed deck-id="3dbcdf7b6a974a1c9bfef291650a9f70" />
                    </template>
                </Talk>
            </li>

            <li class="talk-list__talk">
                <Talk :headingLevel="2">
                    <template #title>Serverless Django with Zappa</template>
                    <template #subtitle>DjangoCon US 2018</template>
                    <template #description>
                        <p>
                            Remove the burden of infrastructure management from your Django applications by going serverless.
                            Use the Zappa framework to run your Django application as an Amazon Web Services Lambda function.
                            See how to offload everything but the database into managed solutions so that you can tackle the application itself.
                        </p>
                    </template>
                    <template #visuals>
                        <ResponsiveImage
                            :src="require('@/assets/djangocon-us-2018.png')"
                            alt="DjangoCon US 2018"
                        />
                        <YouTubeEmbed video-id="ZfynWM4-jFE" />
                    </template>
                </Talk>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import ResponsiveImage from '@/components/ResponsiveImage'
import SpeakerDeckEmbed from '@/components/SpeakerDeckEmbed'
import Talk from '@/components/Talk'
import YouTubeEmbed from '@/components/YouTubeEmbed'

const PAGE_TITLE = 'Talks'
const PAGE_DESCRIPTION = 'Django and Python Conference talks by Dane Hillard'

export default {
  name: 'Talks',
  components: {
    BaseLink,
    ResponsiveImage,
    SpeakerDeckEmbed,
    Talk,
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

  #{&}__talk:not(:first-child) {
    margin-top: var(--space-xl);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--gray);
  }
}
</style>
