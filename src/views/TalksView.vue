<script setup lang="ts">
import { useHead } from '@unhead/vue'

import Talk from '@/components/TalkSummary.vue'
import BaseLink from '@/components/Link/BaseLink.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import YouTubeEmbed from '@/components/YouTubeEmbed.vue'
import SpeakerDeckEmbed from '@/components/SpeakerDeckEmbed.vue'
import thePythonShow from '@/assets/the-python-show.jpg'
import jeli from '@/assets/jeli.jpg'
import pybites from '@/assets/pybites.png'
import djangocon2021 from '@/assets/djangocon-us-2021.png'
import pygotham2021 from '@/assets/pygotham-tv-2021.png'
import realPython from '@/assets/real-python.jpg'
import profitablePython from '@/assets/profitable-python.jpg'
import dataFuturology from '@/assets/data-futurology.jpg'
import djangoChat from '@/assets/django-chat.jpg'
import talkPython from '@/assets/talk-python.png'
import djangocon2019 from '@/assets/djangocon-us-2019.jpg'
import pyohio from '@/assets/pyohio-2019.png'
import pytexas from '@/assets/pytexas.jpg'
import noDogma from '@/assets/no-dogma.jpg'
import theDevHell from '@/assets/the-dev-hell.png'
import testAndCode from '@/assets/test-and-code.jpg'
import pycaribbean from '@/assets/pycaribbean-2019.png'
import djangocon2018 from '@/assets/djangocon-us-2018.png'

const pageDescription =
  'Conference talks, meetup presentations, and podcast appearances by Dane Hillard'
useHead({
  title: 'Talks',
  meta: [
    {
      name: 'description',
      content: pageDescription
    },
    {
      property: 'og:description',
      content: pageDescription
    }
  ]
})
</script>

<template>
  <main>
    <h1>Talks</h1>

    <ul class="talk-list">
      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="Placemaking and Productivity"
          subtitle="Build Maintainable Broad-Scale Tools With a Small Team"
        >
          <template #description>
            <p>
              I tell the story of how we started moving from a cottage industry of bespoke scripts to
              a modular, scalable command-line interface. This story takes you through the principles,
              practices, and specific packages we used to realize this so that you might be able to
              do the same within your organization.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="pytexas" alt="PyTexas logo" :height="250" :width="250" />
            <YouTubeEmbed video-id="BbWTiGJQ9X0" />
          </template>
        </Talk>
      </li>
      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Writing Python Books" subtitle="The Python Show">
          <template #description>
            <p>
              Mike Driscoll and I talk a little about the ins and outs of technical book writing.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="thePythonShow"
              alt="The Python Show logo"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink href="https://www.pythonshow.com/p/26-writing-python-books"
                >Listen to the podcast</BaseLink
              >
            </p>
          </template>
        </Talk>
      </li>
      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="Creating the Conditions to Learn From Incidents"
          subtitle="Jeli webinar"
        >
          <template #description>
            <p>
              I provide a look into ITHAKA’s approach to incident management from response
              coordination to post-incident process flows. We discuss some best practices around how
              the conditions are created in their processes to learn from incidents, as well as what
              to look out for when an organization is spending too much time in the "panic zone".
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="jeli" alt="Jeli logo" :height="250" :width="250" />
            <YouTubeEmbed video-id="nVs8xa69fcw" />
          </template>
        </Talk>
      </li>
      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="Python packaging and effective developer tooling"
          subtitle="PyBites"
        >
          <template #description>
            <p>
              I speak with Bob about the drivers behind writing
              <BaseLink href="https://pypackages.com" rel="noopener"
                ><em>Publishing Python Packages</em></BaseLink
              >, a little bit about the process of writing the book, and some highlights of the
              content inside. Watch below, or
              <BaseLink
                href="https://www.pybitespodcast.com/1501156/12592983-110-dane-hillard-on-python-packaging-and-effective-developer-tooling"
                >listen to the podcast</BaseLink
              >.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="pybites" alt="PyBites podcast logo" :height="250" :width="250" />
            <YouTubeEmbed video-id="wqfbNs3z_lk" />
          </template>
        </Talk>
      </li>
      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="graphene-django or: How I learned to stop RESTing and Love the Graph"
          subtitle="DjangoCon US 2021"
        >
          <template #description>
            <p>
              Though controversial, people generally agree that a major value of Python type hints
              is safety. Robust type safety reduces a whole category of defect to nothing, allowing
              developers to focus on bigger problems. What if we could do this for our API calls?
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="djangocon2021"
              alt="DjangoCon US 2021"
              :height="250"
              :width="250"
            />
            <YouTubeEmbed video-id="LoJD36m1JRM" />
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="Keeping code safe and modern with semantic searches"
          subtitle="PyGotham TV 2021"
        >
          <template #description>
            <p>
              Linting helps us avoid common mistakes and use our team’s preferred style and syntax.
              Deprecation warnings help us know that changes may be coming soon and offer
              suggestions about how to migrate. The time leading up to and during a migration often
              becomes a pain, leading to all-at-once changes that slow teams down. Can we do better?
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="pygotham2021"
              alt="PyGotham TV 2021"
              :height="250"
              :width="250"
            />
            <YouTubeEmbed video-id="g6D6I4s0f68" />
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="The Challenges of Developing Into a Python Professional"
          subtitle="The Real Python Podcast"
        >
          <template #description>
            <p>
              We discuss philosophy on the design principles that go into writing code. We talk
              about namespaces, object-oriented design, and how to keep your code extensible.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="realPython"
              alt="The Real Python Podcast logo"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink href="https://realpython.com/podcasts/rpp/49/" :external="true">
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Practices of the Python Pro" subtitle="Profitable Python">
          <template #description>
            <p>We discuss leadership, mentorship, and approachability.</p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="profitablePython"
              alt="Profitable Python logo"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink
                href="https://anchor.fm/profitablepythonfm/episodes/Practices-of-the-Python-Pro--Dane-Hillard-ekop2b"
                :external="true"
              >
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Practices of the Python Pro" subtitle="Data Futurology">
          <template #description>
            <p>We discuss paths to software development, some fun tools, and laser harps.</p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="dataFuturology"
              alt="Felipe Flores from the Data Futurology podcast"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink
                href="https://www.datafuturology.com/podcast/2020/5/26/113-practices-of-the-python-pro-with-dane-hillard-author-and-lead-web-application-developer"
                :external="true"
              >
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Practices of the Python Pro" subtitle="Django Chat">
          <template #description>
            <p>We discuss using Django at scale, pytest, and teaching beginners.</p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="djangoChat"
              alt="Django Chat podcast logo"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink
                href="https://djangochat.com/episodes/practices-of-the-python-pro-dane-hillard"
                :external="true"
              >
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Practices of the Python Pro" subtitle="Talk Python To Me">
          <template #description>
            <p>
              When you can call yourself a professional developer? Sure, getting paid to write code
              is probably part of the formula. But when is your skillset up to that level?
            </p>
            <p>
              Many folks in the industry suffer from imposter syndrome and other types of
              uncertainty. Yet, there are real techniques and skills you should know before you meet
              this bar.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="talkPython"
              alt="Talk Python podcast logo"
              :height="250"
              :width="250"
            />
            <p>
              <BaseLink
                href="https://talkpython.fm/episodes/show/246/practices-of-the-python-pro"
                :external="true"
              >
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk
          :headingLevel="2"
          title="Using a custom template loader at scale"
          subtitle="DjangoCon US 2019"
        >
          <template #description>
            <p>
              You can reuse Django templates with the <code>{% include %}</code> tag. But what if
              you need to share a template across multiple projects? Learn how we built a custom
              template loader to ship template changes&mdash;all without deploying any code.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="djangocon2019"
              alt="DjangoCon US 2019"
              :height="250"
              :width="250"
            />
            <YouTubeEmbed video-id="pocIpg1FZ3c" />
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Adopt-a-pytest" subtitle="PyOhio 2019">
          <template #description>
            <p>
              <code>pytest</code> is a testing framework that makes writing and running Python tests
              simpler. Adopting new tooling in a large system is often a burden. How can you
              introduce <code>pytest</code> gradually with minimal pain?
            </p>
            <p>
              With its simplified syntax, powerful fixture behaviors, detailed test reports, and
              plugin-based architecture, <code>pytest</code> has a lot to offer. Whether you're new
              to Python unit testing or you've been using <code>unittest</code> for a while,
              <code>pytest</code> may be something to consider. It's not too hard to get up and
              running with <code>pytest</code> on a fresh project, but how can you retrofit an
              existing project without having to refactor the world all at once?
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="pyohio" alt="PyOhio 2019" :height="250" :width="250" />
            <SpeakerDeckEmbed deck-id="22f01cc587cb451382bb62f93063cc67" />
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Good Software Practices" subtitle="No Dogma Podcast">
          <template #description>
            <p>
              Some of the important principles of software development discussed in
              <BaseLink href="https://thepythonpro.com" :external="true"
                ><em>Practices of the Python Pro</em></BaseLink
              >. Get a feel for the book as I run through the table of contents with Bryan.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="noDogma"
              alt="No Dogma podcast logo"
              :height="250"
              :width="250"
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
        <Talk :headingLevel="2" title="Hot for Teacher" subtitle="The Development Hell">
          <template #description>
            <p>
              What does the process of writing a book look like? What are the logistics with
              publishing and authoring? What gaps does
              <BaseLink href="https://thepythonpro.com" :external="true"
                ><em>Practices of the Python Pro</em></BaseLink
              >
              address? Chris and Ed grill me on these questions and more.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="theDevHell"
              alt="The Development Hell logo"
              :height="250"
              :width="250"
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
        <Talk
          :headingLevel="2"
          title="Non-traditional paths to software and the skills required"
          subtitle="Test & Code with Brian Okken"
        >
          <template #description>
            <p>
              We with experience and privilege who are able to teach should help our communities
              grow. Underserved, underrepresented, and non-normative groups need access to
              high-quality resources. The more we can democratize software development knowledge,
              the more empathy we can deliver.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="testAndCode" alt="Test & Code logo" :height="250" :width="250" />
            <p class="talk-list__talk__description">
              <BaseLink href="https://testandcode.com/70" :external="true">
                Listen to the podcast
              </BaseLink>
            </p>
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Multiple Inheritance and Mixins" subtitle="PyCaribbean 2019">
          <template #description>
            <p>
              Start with old- and new-style classes and inheritance. Then learn about multiple
              inheritance, method resolution order, and mixins. Finish with a few practical mixin
              examples. Inspired by
              <BaseLink
                href="https://easyaspython.com/mixins-for-fun-and-profit-cb9962760556"
                :external="true"
                >Mixins for Fun and Profit</BaseLink
              >.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage :src="pycaribbean" alt="PyCaribbean 2019" :height="250" :width="250" />
            <SpeakerDeckEmbed deck-id="3dbcdf7b6a974a1c9bfef291650a9f70" />
          </template>
        </Talk>
      </li>

      <li class="talk-list__talk">
        <Talk :headingLevel="2" title="Serverless Django with Zappa" subtitle="DjangoCon US 2018">
          <template #description>
            <p>
              Remove the burden of infrastructure management from your Django applications by going
              serverless. Use the Zappa framework to run your Django application as an Amazon Web
              Services Lambda function. See how to offload everything but the database into managed
              solutions so that you can tackle the application itself.
            </p>
          </template>
          <template #visuals>
            <ResponsiveImage
              :src="djangocon2018"
              alt="DjangoCon US 2018"
              :height="250"
              :width="250"
            />
            <YouTubeEmbed video-id="ZfynWM4-jFE" />
          </template>
        </Talk>
      </li>
    </ul>
  </main>
</template>

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
