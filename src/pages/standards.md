---
title: '6: Jory Burson on the Significance of Standards'
date: '2019-05-24'
time: '65'
description: "Why should we standardize? Jory Burson (Bocoup) joins Henry to talk open source and standards: what they are, why we need them, what should be standardized, lifecycles of standards, past/future accessibility of participating in the process, and more!"
episodeLink: 161de068
embedUrl: https://share.transistor.fm/s/161de068
---

## Links (WIP)

## Transcript

> ([edit link](https://github.com/hzoo/maintainersanonymous.com/edit/master/src/pages/standards.md))

Henry: (00:07)
Today I have with me Jory Burson. She's been involved in standards for a really long time. I met her through TC39. Thanks for joining today.

Jory: (00:19)
Of course, I always enjoy chatting with you.

Henry: (00:21)
Can you go into more of your background, actually? I know there's a lot to cover.

Jory: (00:27)
Yeah. I think it's interesting, because standards work is considered sort of like this older population of people who care about standards, and then there's me. I'm very young. I just want everybody to know. Just kidding. How I fell down that rabbit hole is kind of interesting, because I came to work in 2011 here at Bocoup, which is where we're recording from today. We have like this really cool office space. My job at the time was to do training classes and events and stuff that were kind of furthering our commitment and our activities in the broader community.

Jory: (01:16)
We would host things like the W3C tag meeting, and different, like the Mongo community working group meetings, and the TC39 meeting and things like that. I had been part of Open Source. I knew what Open Source was, I knew what the W3C was. I knew what these organizations did, but I never really thought about how technology gets made. Then we start hosting these meetings, and I realized, oh, so what happens is just a bunch of people get in a room and argue with each other for three days. Then out the other side we have-

Henry: (02:02)
A standard.

Jory: (02:02)
Yeah, a standard, what? That seems-

Henry: (02:05)
That seems like it would be more complicated, but it's just a bunch of meetings and people talk about it.

Jory: (02:12)
Right, exactly. You think, oh, there's got to be some-

Henry: (02:15)
Process.

Jory: (02:16)
... process. Further, I was seeing that the people in the room were like, some of them were my age, some of them were older. They looked like me, they didn't look like me. It's just like really, what? I thought some like, I don't know, the pope of standards comes down-

Henry: (02:33)
Right, and chooses people.

Jory: (02:35)
Yeah.

Henry: (02:35)
Right. I don't know how these people come to where they are. Maybe there's all different stories.

Jory: (02:40)
Right. It just blew my mind. I realized it wasn't, it was both more complicated and not any more complicated than that. From there, I just decided that I really wanted to know as much as I could about how this system worked, because it was clearly something that was happening and that I was taking for granted. It must be other people didn't know too.

Henry: (03:07)
Yeah. I mean I think it's probably, now you bring it up, because I feel like that's the same with say with me joining Open Source, or anyone... There's that point, I don't know, it's a weird epiphany where you're using something or you're involved in something from the outside, you want to be looking in. Then you finally realize, oh, I could be a part of this. I could be on the inside, or that the whole [inaudible 00:03:31] that far away for you it's possible. Yeah, I guess it's one of your goals about the help more people be a part of that, right?

Jory: (03:40)
Right, exactly. That's kind of what I was tasked to do. Then I got more involved in just helping plan meetings, and helping arrange logistics and getting people plugged in. I think a lot of what I learned early, early on was sometimes it was just a task of making sure people knew what was going on. That was a barrier, is just knowledge of, oh, well the meeting's happening here, that kind of stuff, and here's how you get here.

Jory: (04:14)
Then it kind of, my understanding of things kind of unfolded more as I realized, maybe a meeting space and that kind of stuff is a shared common problem across the W3C or TC39 or whatever, but there are these other systems of decision making that the W3C has that Ecma doesn't have, that OASIS doesn't have. That there was actually this whole industry behind what we were doing that we were kind of making up for the web, but it's actually been around for a long, long time. So then I started getting into the history of standard. I kind of identify as a bit of a standards historian, I think.

Henry: (05:08)
Yeah. It's interesting, the place is, I guess it's not that different from conference organizing. Bringing people in and logistics. Then the actual part of the meeting itself is totally different. I guess maybe we should back up a bit, and talk about what exactly, how do we define what a standard is. How people think about them. When people hear the word standard, they probably think of like, I don't know, electricity, standards are like USB and stuff like that, right?

Jory: (05:39)
Yeah.

Henry: (05:39)
Then it's maybe even like how is that different from like an open source standard, or the web standards?

Jory: (05:48)
Yeah, yeah. Talking earlier how we kind of have this failure of language, because we use the word standard to do a lot of heavy lifting for us in different places.

Henry: (06:02)
Kind of like [inaudible 00:06:03].

Jory: (06:03)
Yeah. Very specifically, when I'm talking about standards here, I'm talking about a technical specification of some kind that has gone through a fairly rigorous process. And the end result of that is a standards body has accredited that standard to say it has satisfied the rules of the process. Which often include rules about how decisions were made, how different parties or constituencies were consulted, IPR commitments of some kind.

Jory: (06:52)
Generally there's some sort of review period that the standards organization will have so that people from within and without the organization can come in and raise any issues or concerns against that standard. Once that's all done, we say that that's a... There may be some vote that's held as well. But when that process is concluded, we say that that's now a W3C standard, or an Ecma standard, or an OASIS standard, or an ITF standard. Ostensibly from there, the standard is either furthered through the international standard system, which could go through a national standards organization in the United States.

Jory: (07:41)
We have ANSI, the American National Standards Institute. But there's different, almost every national government has its own standards organization. It could go to the ITU, it could go to ISO, but those are global standards organizations. At that point, it's a kind of document that any government could say, "We want to have a requirement that all electrical outlets produced in our country meet that standard."

Henry: (08:24)
Yeah, there's so many questions around like who gets to be in the group, and once you make a standard how is it adopted. Is it adopted? How do you make it... I guess, maybe we should talk first what are the things that should be standardized, or how do you decide what should be standardized even?

Jory: (08:50)
Yeah, that's a really good question. I think the first place to look at is there an opportunity, should there be an opportunity to standardize something is where two systems are meeting.

Henry: (09:06)
An intersection.

Jory: (09:08)
In the intersections, exactly. Really what a standard does is promote interoperability of different kinds of systems. It could be data exchanges, or it could be hardware interoperability. Whatever that case may be, that the intent is to help two things kind of-

Henry: (09:32)
Talk to each other.

Jory: (09:33)
Talk to each other.

Henry: (09:33)
It's just like API or interface.

Jory: (09:35)
Yeah.

Henry: (09:36)
Just a shared interface.

Jory: (09:38)
Exactly. So where you have those shared interfaces, especially if those shared interfaces are potentially being produced by competing companies or competing industries, but there is some social or cultural benefit to the two being able to communicate with each other, then we should be looking at whether that should be a standard. We don't want to lock people into one company's view of the world, one company's tools or solutions.

Henry: (10:09)
I guess off of that, it's like what incentive does a company have to do that? Especially if the company, maybe they're doing really well, they wouldn't want to give that, say I guess with Apple, they have their own standards for certain things. They don't want people to be able to use the same things for multiple devices.

Jory: (10:30)
Yeah, there have been a number of studies about the economic incentives for companies to think about producing goods in a more interoperable way. The studies tend to show that there may be some short-term gain to be had by trying to lock something down, but over the long-term there you end up paying more. In the case of a company that locks people in too much, you have like the anti, what is it, I suddenly can't remember.

Jory: (11:11)
It's not antitrust, maybe that is what I'm trying to think of. But you get the punishment of being deemed a monopoly, so you have to break things up and all that kind of thing. So it's not always the most sound economic choice for a company to make. You also have in government procurement a lot of times there's a requirement-

Henry: (11:40)
To meet a standard.

Jory: (11:41)
Yeah, that in order for say the government to purchase a technology, it can't just be, the government can't say, "We want to purchase Microsoft Word," for example. It's got to be like, it's a word processing system that produces open standards, so that they're not locked into one particular vendor. I'm speaking of course from a US-centric perspective. That's sort of another kind of piece of the puzzle.

Henry: (12:14)
Yeah. That makes me think that if the company is really powerful, they have an incentive to have the market, and then just take the format they use and make that the standard. It's almost like making it and going like, "Hey, this is what I want to use, because we have all the users." That becomes the standard.

Jory: (12:35)
Right. That's something that has started to pop up more as there's been kind of shift in what we're producing and how quickly we produce it. Interoperable standards were extremely important in a world where our goods were physical. We're talking about like if company A produces 2x4's, and company B produces 2x4's, and we want to build structures that are sound, those had better be the same freaking size 2x4's. That's really, really important.

Jory: (13:15)
But we've shifted to a digital world, and we're producing goods that are at the end of the day some combination of 1's and 0's. People don't necessarily think about how important it is for our digital goods and services to be interoperable. The standard system that we have, in terms of the organizations that accredit standards, that's the SDO system-

Henry: (13:50)
SDO?

Jory: (13:51)
Standards Developing Organizations, that system of organizations, has been around since the 1800s. We are talking about in some cases producing digital software standards using this system from over a hundred years ago. That's nutty, that's so cool, also crazy.

Henry: (14:20)
Yeah, it still works too.

Jory: (14:20)
It still works, but the complaints are that obviously it's slow, and that it probably doesn't necessarily produce solutions and things as quickly as we would like. So we get all of this innovation in the wild and open source and everything.

Henry: (14:41)
Oh yeah, I think it's interesting you brought up this transition period, which I guess everything has to seem to have to go through because we live in this technological age. Standards being about physical things, and now being about digital things. I guess even thinking about [Dockerlite 00:14:58], they used an analogy of the shipping container and how that was standardized so that people could put everything in the same container, then we just apply that analogy to software.

Henry: (15:10)
Yeah, I guess it's just interesting. I don't know how people are able to move through that. People that are, they're not like stuck in the past, but they're still thinking a certain way and other people are trying to, it's almost like... I almost feel like people in the digital age always want to start over, and they forget that there's [inaudible 00:15:28]. I feel like the same with open source. We get [inaudible 00:15:34] page and we forget the past.

Jory: (15:37)
Right, like it's [inaudible 00:15:39]. Yeah. When I think about what we're still carrying forward from the 1800s, some of the things that I think that we got right that we need to continue to carry forward are the system of one org, one vote. Let's get everybody around the table into some kind of, they used to call them congresses, which was a fancier word for tech conference essentially. Back in the day, they were writing really long letters in like ink and quill, arguing their points of view.

Jory: (16:22)
Now, we have GitHub issues for that. But they would get everybody in session to debate proposals, and to raise concerns and that kind of thing. It is synchronous. It's a synchronous thing. We still produce standards that way. We still get all of the TC39 delegates in a room six times a year. Say what you want about how expensive that is, it's really valuable to get to know where your compatriots are coming from, some of the concerns that they have. It moves more-

Henry: (17:07)
Casually, I would say, those conversations. I think people that have not been to the meeting, they might think like, oh, you don't need to do things during the meeting. It's like, well people are talking on chat or GitHub asynchronously between the meetings. But then it's at the meetings you make the decisions.

Jory: (17:28)
Right. That's exactly, that exact thing happened back then, and it's happening now. That's just a function of basically I think a healthy system working, that smaller groups of people are coming up with ideas, hashing them out together, engaging with people that are disagreeing with them even in a smaller setting. Then going to larger group to make a case, and having that group assent and say, "Yes, we all agree."

Henry: (18:01)
Yeah, that makes sense. It's funny you call it a congress, because like in way, especially on a Tuesday night, I know of people that you can present other people's proposals, you're representing that group of people or that person or that community. You might not even agree with that proposal in the first place, but you're there.

Jory: (18:21)
Yeah. That's something that has carried forward, and I think should continue.

Henry: (18:31)
I guess, because we talked about things, unless there's other things that standards, are you saying have been done well or might, or things that have not?

Jory: (18:43)
I'll say another thing that is really valuable that we've carried forward, and that's the documentation process, the archival process. Some of the earlier standards organizations are groups like IEEE that have been around for quite some time. They were just religious about documenting agendas, and meeting outcomes, and issues of the day and that kind of thing. That's a role that the modern standards development organization continues to play for communities that are doing technical work. They are basically very important secretaries for the committee, so the committee doesn't have to worry about saving this sort of data. They do it.

Jory: (19:45)
We know now why a decision was made 20 years ago or 30 years ago in a given space because these organizations have held onto that material. That's like, we were talking archiving earlier, maybe people don't really necessarily care about history or whatever, but one day people do, lots of people do. In the immediate sense, it saves the headache of having to re-litigate a decision that was made, or whatever, or at least providing some context for why we're in the state that we've in. The state that we're in today is a function of decisions that were made 20 years ago.

Henry: (20:35)
It's just funny, because I feel like I have always wanted to learn about history, not when it's too late, but it's like at the end of when we're doing something, not like while we're doing it. It's weird, because it's like maybe we should be thinking about this stuff earlier, be more proactive rather than retroactive. Yeah.

Jory: (20:54)
Yeah. I think that's important. I think people sometimes who do care about the history of things and who like to bring it up in the process of making something, and I'm guilty as charged of being one of those people. Sometimes, we end up getting kind of accused of living in the past. In the worst case scenario, it might be like, "Well, just because we used to do something that way, it doesn't mean we have to do it this way moving forward."

Jory: (21:32)
I don't adhere to that. Let's do change the status quo. But there's oftentimes a decision making framework or an organizational framework that we can glean from how things used to go, or how something happened back then, that if we apply to the decision moving forward, we might find ourselves in a more smooth kind of situation. That's sort of something else I think.

Henry: (22:06)
Yeah, I was reading about, because you brought up whether we should keep old things or when we should replace them. Recently I had been reading about this idea called Chesterton's fence. It's the idea that when you encounter the fence, you might want to get rid of it. His point was saying that, if you get rid of it, you should at least know why it was put there in the first place, instead of just saying things like, "Oh, it's there. I want to get rid of it." I don't think it means that old things are better or you shouldn't get rid of old things.

Henry: (22:39)
It's just saying that you need to be informed on what was there in the first place. [inaudible 00:22:45] know that means that I could say with confidence, "Oh, I'm getting rid of this because of this reason." I think it's like, new stuff isn't always better`and old stuff isn't always better, but I think maybe in the end we don't really want to think about it. We just do what feels good or whatever, versus digging through those kind of issues.

Henry: (23:06)
I really like this quote. I don't remember exactly, it goes something like, tradition is almost like, he said it was the democracy of the dead. It's like people that are not represented are people that aren't alive, and tradition is what they are saying. I thought it was super interesting.

Jory: (23:24)
I like that on multiple levels. One thing that helps in my mind is just when you come across those things where you might wonder why this is here. This doesn't seem to make sense. I try really hard to just get super curious about not only what it is, but about the people behind that. I have to believe that the people who came before me in a given space were really smart individuals who cared. It seems like the right thing to do to honor that by being curious about what they were doing, and understanding it. I really want that in the future when I'm dead.

Henry: (24:16)
Yeah, they'll be, oh, this person, yeah, I don't care what-

Jory: (24:20)
Right. I would like for them to be like, "Oh, well I understand why Jory did that. It doesn't make sense now, but."

Henry: (24:25)
At the time.

Jory: (24:26)
Yeah, let me pay me my little, my digital [inaudible 00:24:29], and pay my respects. That's really dark and morbid, sorry.

Henry: (24:37)
No. Yeah, I guess I just thought this whole thing is so interesting, because [inaudible 00:24:43] liturgy, and it's the same kind of deal. I guess another question related to standards is more like how do we even go about making a standard in the first place? I think even with any tradition really, it's like is it top down or bottom up? What was in the middle? There's this idea of like, to me, based on being in JavaScript, I feel like it's always someone in the community did something in a really weird way, but it works. Then eventually everyone's using it. Then the standard is that you just adopt some version of the thing that everyone's using right now, whether it was jQuery or anything.

Jory: (25:22)
Yeah. What I think is important about note is that depending on the industry and the technology and the space, standards get made all kinds of different ways. In the web, now today, we tend to want to pave cow paths, so to speak, where we let our open source communities or community groups or whatever just kind of go wild with ideas and stuff. Then we figure out, okay, well what really needs to stick around and what needs to become part of the platform? It goes sort of that direction, and more or less works.

Jory: (26:08)
But there is still a lot of industries and spaces where we can't do things that way, because they would be too costly. Here, we're looking at things like hardware and that kind of thing. If you do that too many times with chips and things like that, that's an immense amount of cost in terms of just the silica even to produce these things. Then there's a long life cycle between figuring out whether that thing works or not.

Jory: (26:39)
You have to really figure some stuff up front. When you look at other types of applications for technology, if it's something that is in healthcare or safety, you need to know that you're not endangering lives, that you're not putting something out there that could really move us all backwards a little bit. We kind of have a bit of a luxury in the web space, because the safety net is, the stakes are getting higher and higher for us. Right now, the worst case scenario-

Henry: (27:27)
The more users are-

Jory: (27:28)
Right, the more users, the more we're doing things on the web platform, buying homes, and putting our identities out there. So you do have real potential serious negative repercussions, which is part of the reason why it's important to start thinking about standardizing these things. The security and privacy and these concerns that we used to not worry about on the web, we have to now.

Henry: (28:00)
Right, similarly because there's more people, the whole usability and easy is it, intuitiveness and those kinds of concerns. It gets really complicated. It's not just like, does it look good and is it efficient. Those are obvious things, but then all these other parts come up. It's no wonder it takes a long time.

Jory: (28:18)
Yeah. And are we potentially marginalizing different groups of people because we have decided that to use an important system, you need a network connection speed that looks like this, or a device that looks like that. If the answer to any of those questions is yes, then you've just disadvantaged somebody in a really-

Henry: (28:43)
Kind of like literally at a systematic level I guess.

Jory: (28:46)
Exactly, at a systematic level, exactly.

Henry: (28:51)
Then yeah, [inaudible 00:28:52] it's also like this idea if you do the cow path thing, maybe that use case isn't even relevant in a few years. We're looking for the long-term. Maybe it takes a few years to standardize, and by that time it's standardized, no one cares anymore. How do you know to think long-term, then also holistically on the standard. I think one of the problems is that with, it seems like one of the issues that could come up was even with say TC39, the whole proposal system and individual features is that it's hard to think holistically on different things. So you might add, if you add everything individually it makes sense, but then when you combine them it doesn't make sense.

Jory: (29:36)
Yeah, like it may be a case that because we're operating in this world, the sum isn't really greater than its parts, because together it feels like it lacks cohesion.

Henry: (29:49)
Yeah.

Jory: (29:51)
I think that's a complaint people have of the platform, a valid one, frankly.

Henry: (29:58)
Yeah, a mishmash. This is what JavaScript feels like right now. It's like, are we going to embrace that? It's kind of hard not to, because there's so many stakeholders, like you said, or users, or different use cases. It's like, what is JavaScript? I think people have also talked about how JavaScript is not really owned by anyone anyway, so there's not... And it's a good thing and a bad thing, because they can do anything they want, then there's no... It's like you want that one person to decide the vision of JavaScript is this, like this committee. [inaudible 00:30:33] reason on that, maybe that's good, maybe it's bad. It's just how it is.

Jory: (30:37)
Yeah. It is definitely how it is right now, but that's exactly right. I think the committee a lot of times gets a lot of valid complaints, because it seems disjointed. There wants to be a roadmap of some kind, but at this point JavaScript is so ubiquitous, it's used in so many places and so many different ways that it almost seems like it would be an insurmountable task to come up with that roadmap. To that end, maybe we need to kind of think about... And this is one of the motivations I think in a way behind TC53, which is the new kind of sister technical committee for 39, where we're focusing on JavaScript in more IOT type settings. Is there a secure version of JavaScript? Is there an IOT version?

Henry: (31:55)
Like without splitting away?

Jory: (31:58)
Right, exactly, without, is there some kind of subset, or are there some new APIs that we need to service that use case?

Henry: (32:11)
Yeah. I mean there are definitely constraints that the committee, specifically has put in, I guess that's true for any standard, but JavaScript is like a whole, there's one JS that is, once you add something in, you can't get rid of it, deal. Then it's what you can do. Then also not adding multiple modes or different years for certain things too.

Jory: (32:32)
Yeah. A lot of people complain about that, but I think, I value a constraint like that. I think constraints-

Henry: (32:43)
Are-

Jory: (32:44)
Yeah, I think they help make solutions more creative. You also have to think about the consequences of adding something in, if you know that the stakes are really high. You can't... So I hear people who say that, but I-

Henry: (33:08)
Yeah, it's just hard. I think especially online, it's like you can simultaneously have people that think that the standard moves too fast and too slow at the same time. Then you're kind of wondering, well what do I do here? I feel like that with even what I'm doing as far with our project, which is very related to the committee itself. It's also a weird intersection there. You feel like lose-lose.

Henry: (33:39)
Every decision is not going to work out that well, because they're not... Like the whole situation is not that great, but we're all using it, so it's like either... I mean it seems like for most people in that situation, the answer is just use something different. It's like for the people it might be not to use JavaScript, or make a new language, or continue to stick with it.

Jory: (34:03)
Yeah. It's tricky. It's tricky, it's so tricky.

Henry: (34:08)
Yeah. My next question is kind of around how, well there's the standard process, but then there's like the standard itself and how that evolves over time. What is the life cycle of a standard?

Jory: (34:25)
Yeah, that's a great question. Again, it's kind of one of those things you have caveat with, it does depend on the kind of standard that you're creating. One of the fundamental principles of a lot of the formal standards developing organizations is that the output, the standard itself, should be available in some form in perpetuity. So that 10 years later if somebody really wanted to, they could implement that standard in their product or whatever.

Jory: (35:04)
Following whatever rules the SDO might have had, depending on how long the working group or the committee really thinks the technology needs to serve. Sometimes it's not that long, sometimes these things are created with the expectation that they will be obsolete in a few years. That's okay, because they're planning that up-front. You know what I mean?

Henry: (35:35)
That's really interesting. Because I feel like, especially in open source, you're not thinking about that. You're just like, I want my thing. It's for me, and I don't care. Or I want this to be long-term.

Jory: (35:45)
Right. The idea that a technology can have a planned life cycle and be deprecated is a very common like okay idea in standards. But it's not really in open source as much. I would love to figure out how to talk about project succession planning and project, those kinds of life cycles for open source projects. This is a tangent, I'm sorry.

Jory: (36:22)
I've been thinking a lot lately about how we have a lot of open source projects and things that have, especially in the last 10 years, that got super popular and then just like that they were passe. But we've got all these applications, we've got all these sites using them. So there's like this sort of, the analogy I have been describing is sort of like a garbage-

Henry: (36:47)
Garbage dump, yeah.

Jory: (36:49)
Yeah, we have like this garbage dump of, yeah. How do we clean that garbage dump up? Anyway, so that's-

Henry: (36:58)
No, no, no. We can talk about this, because I feel like it's almost like, it's funny, it's like our desire to live forever as people reflects in with work that we do. And that understands like the life and death cycle of people, but also things. Then that's what I feel like a lot, that's what leads to a lot of burn out, because we feel like we have to, when you sign up, which you don't sign up, you just somehow accidentally become a maintainer or something, then you feel like you have to do it forever and leaving is impossible or leaving is really difficult. Or you've already left mentally, but you're still there.

Jory: (37:39)
You're still there, because if you physically move on, there's who's there? That's a pretty big problem, and I really care about it. I know lots of people who are either currently themselves in that situation, or they have figured out how to move on but they are not satisfied.

Henry: (38:01)
It's always in the back of your mind.

Jory: (38:03)
Yeah, because that transition wasn't, it was rough. It wasn't planned for, it just sort of happened in some way that they now look back on that time as something that they're not necessarily ready to reflect positively on the work that they did, because they still feel kind of just upset about how the transition happened, because it could have gone more smoothly or whatever. In open source, we need to think about succession planning for the individual maintainers, and for the communities, and also for the-

Henry: (38:44)
Overall.

Jory: (38:47)
Overall, yeah, web ecosystem. In the standards world, that foreplanning has been baked in to a certain extent to the process. That would be something that I would really like to try and break into.

Henry: (39:07)
Yeah, because even just in our culture, we have BDFL, for life. That's already reflected in the culture. Even if you want to leave, it's like it's an expectation. Then yeah, we were talking about this earlier too, of open source and the culture is around being inclusive and welcoming as many people in as possible. But if we can't even figure out how to get people out, then that is leading to even more issues. All we're doing is inviting people into misery, I suppose.

Jory: (39:39)
Right.

Henry: (39:39)
Maintaining something they don't know how to get rid of. We should figure that out before, not before, but like while we're figuring out this other stuff.

Jory: (39:46)
Right. It needs to happen hand-in-hand. At the same that we're really putting a little bit of pressure on these communities to open up their contributor base and invite more people into their communities, if they have unmet needs, one of which might be the need to get the hell out of there, which is valid, then how can we help facilitate that? How can we help them? That's something that I care a lot about. I haven't figured out exactly, it's one of those deals where it's like an individual person, here's what we can do. But how to sort of make that a broader pattern. I don't know yet.

Henry: (40:36)
Yeah. It's like I don't know if you could standardize that kind of thing. Even just knowing that people leave is, that in itself is interesting. Knowing that like, oh, people actually, because we can say all day, "You should just leave the project," or "You should just quit," stuff like that. But if you're not actually living that out and seeing other examples, you're not going to feel willing to do it.

Jory: (40:59)
Yeah. You're not going to feel like that's actually a step you can take.

Henry: (41:00)
Possible.

Jory: (41:01)
A possible step you can take. One thing that, within the OpenJS Foundation, which is the new foundation of the merged Node and JS Foundation, it's now the OpenJS Foundation, we brought Node, Libuv and Express from the Node Foundation, and 28 some odd other projects from the JS Foundation, probably five or six of which really functionally are done. They're complete. We decided to call those projects emeritus projects. I argued for this name specifically because to me it connotes-

Henry: (41:44)
A graduation.

Jory: (41:44)
Like a level of respect, like thank you for the contribution that you made to the ecosystem, but we respect now that your work is functionally done. I hope that's one small thing that just sort of says, it's fine. It's a good thing if you feel like the work here is done. Let's turn this into something to celebrate. Let's help you as a maintainer feel good about the community that you have built, the effort that your team put in. Let's celebrate that. That's one small step.

Henry: (42:26)
Yeah, I think for projects, even like for... I guess we use the word alumni, which is basically the same. Then I've seen other projects do the same, where once a contributor steps down, they get added to this emeritus list. Like what you said, it's like a badge. When you leave, you have to do that hard thing of removing them from access to all these things for security reasons, but we shouldn't erase their contributions obviously. They did a lot of work, and it's important. Maybe just as much as we celebrate people joining the team, we should celebrate them leaving too. Don't make a big deal about it.

Jory: (43:05)
Yeah, that's something I would like to see just as a pattern generally, whether it's an open source contribution or somebody leaving your company. One thing that we did at Bocoup, which was weird for a lot of people, but a lot of people always came up to me and thanked me for it. When somebody left the company, we wrote them a farewell post and celebrated what they did, what they brought to the team and that kind of stuff. My colleague, Mike Pennisi wrote a lot of wonderful posts over the years, and people just love that. It didn't erase their time here at the company.

Henry: (43:49)
Yeah, for sure. I want to get back to the standards. Well I guess my questions around how do you know what someone's adhering to the standard. It's almost like verification of the standard. Because the standard is a document which in a sense is kind of like a language/code. I was thinking about with TC39 we have tests, there's a set of acceptance tests that's [inaudible 00:44:15] difference so that you know that a JavaScript engine is actually do JavaScript right.

Jory: (44:23)
Yeah, yeah. That's a great question. In the past when they would produce a standard, again, these were largely for physical goods, it was this very descriptive document. You knew that it worked because when you made it, and you plugged it into the other thing it was supposed to be interoperable with, it worked or it didn't. A good that failed was just going to fail, so you knew that it didn't really adhere. But over time and on the digital space, the idea of what a standard is has shifted from this notion of, well it's still just a document, a standard is still just a piece of paper with steps written on it. To it's a document and a test. I'm sorry, a document and an implementation.

Jory: (45:20)
You have to have both things for this to really be something that we consider a standard. Then thirdly, I think TC39 and the W3C's web clock on [inaudible 00:45:35] community is another longer running example of this I think, are starting to really push forward this idea that for us to have a web standard we need the document, we need the reference implementation, and we need the tests. The next version of that is going to be all three of those things and documentation.

Henry: (45:56)
Right, examples and stuff.

Jory: (45:57)
Yeah, yeah. I think what we're going to see is like this growing set of criteria for real, I'm using air quotes here, "real standards" are that document, the tests that are ideally something that you can both consume and then upstream your own contributions to and kind of treat in somewhat of an open source capacity their reference implementation, and documentation on MDN probably.

Henry: (46:28)
Yeah, yeah, of web based stuff.

Jory: (46:30)
Yeah.

Henry: (46:32)
You brought up wanting to get more people into standards. I guess what's your current thinking on do that action?

Jory: (46:42)
One thing is that, first off, I hope everybody finds standards as interesting if not more so than I do. First off, what we just started, I hope that you find this interesting, and if so, super, that's like a great place to start. From there, one of the challenges is that a lot of our standards organizations don't have good on-ramps for people who care about these things but aren't affiliated with organizations that are dues paying members. This is a complaint about the standards developing system. You have to be, and this is really old, but you have to be a member in order to quote "have a say" or have a vote, or participate in some meaningful way in the work of a technical committee. Some groups have invited experts.

Henry: (47:36)
Like me, I guess.

Jory: (47:36)
Like you, some groups have a Henry, and these are folks that the committee deems have critical expertise that the committee needs in order to consider all aspects and facets. But there's a lot of burden on invited experts, because unlike the case of a dues paying member, they probably don't have the funds to travel.

Henry: (48:03)
Mm-hmm (affirmative). Which is why I only go to the ones where I live usually.

Jory: (48:10)
Right. This is a shared problem in W3C and other groups as well. That is a problem space that we need to tackle if we're going to figure out within these older systems where the organization itself, the operation of the organization is funded by dues from members, which is important. How do we make sure that the organization continues to function and provides the services that it provides, and we have space for invited experts and others from the community to come participate without necessarily having to pay the large sums of money that groups like Google or whatever Microsoft pay? That's one thing.

Jory: (49:03)
Another area that people can kind of, I don't want to say hack the system here, but it's a little bit of a system hack, is that a lot of these organizations have not-for-profit members. These are universities, they're governments, they're non-profit foundations that are participating in the work of a committee. A lot of times, they are in the same boat in that they can't necessarily fund travel, but they do get a seat at the table. They do get invited to the meetings, they do get to weigh in on committee matters and that kind of stuff. There's certainly a possibility, especially for those who might be affiliated with a university, to participate in standards work that way.

Jory: (49:59)
One thing that we're hoping to do at the OpenJS Foundation is, because the OpenJS, slash, entity formerly known as JS Foundation has a not-for-profit status for the W3C and the Ecma International, is to figure out how we can sort of serve as a bit of a funnel for our project communities to provide feedback into specific working groups from their broader community work. [Dan Erenberg 00:50:29] actually has done a lot of work to kick some of this thinking off with his outreach groups around education and frameworks and stuff like that and tooling.

Henry: (50:44)
Totally. I was going to bring it up too, it's almost the question is, what is the goal of all this? Is it the goal to bring more people to those meetings, or to get people involved in general? It's like, the same with Open Source. Maybe it's fine for people to just feel comfortable and to get out issues, maybe they don't even want to be in the meetings. They just want to be involved. These outreach meetings with specific groups of people, whether it's educators or tooling, maybe that's enough to give the feedback because they don't need to be in the meeting if someone can represent them.

Jory: (51:13)
Yeah. I'm hoping that most people would agree that what is necessary is to ensure that their concerns are being heard, and that their concerns and needs and use cases are being recorded somewhere and considered. That's I think the number one problem to solve. Then there's this other pass that I think helps make a standard more universal and more inclusive, which is the pass of have we gone and considered among specific communities of possible stakeholders who don't always have a voice.

Jory: (52:03)
I'm thinking here of like, if we've got a networking standard that we expect to do X, Y or Z, and we haven't spoken with groups that build technologies in environments, like in rural Africa for example. We need to be making sure that everybody is getting a chance to have eyes and to have a say in a standard that they may end up needing to, or being stuck with, which would be like the worst case scenario, that they didn't necessarily have a say in. I think that's really important.

Henry: (52:55)
Yeah. It sounds like just government I guess.

Jory: (52:57)
Yeah, it is. I think we're kind of seeing this on a little bit more of like, in an acute way with AI technologies. There's this story out right now about San Francisco banning AI for law enforcement, that kind of stuff. There hasn't been enough analysis among experts who focus on algorithmic bias and that kind of thing in those spaces. So it's like we shouldn't just, it shouldn't be ready-fire-aim.

Henry: (53:35)
Right, right, yeah.

Jory: (53:38)
Yeah. It's a lot of thought stuff.

Henry: (53:41)
Well I guess lastly then, I want to bring up another topic you're interested in, which is how to... We're talking about committees and standards, and ultimately it's about people. How do we build the community, but also the leaders what will shape the future of where we're going? I guess, it's funny, even on TC39, we have champions. We call them champions. Those are the people that push those specific things forward.

Henry: (54:14)
A lot of times, I feel like people will say that if there's not at least one person taking ownership, it kind of doesn't really go anywhere. It just kind of stops. How do we have that? It's the same problem in open source too. People can kind of do their own thing, but then they need someone or a group of people to kind of lead things with a vision, an idea.

Jory: (54:36)
Yeah. That's sort of like the problem of, if everyone's in charge, no one's in charge. I think that's the way the saying goes, or if everybody's responsible, nobody's responsible. There's some version of that. We have this misconception that the work is all technical, that what matters is achieving the correct technical outcome. Beyond that, who cares? Okay, well, wrong, because first off, there's no such thing as a correct technical outcome. It's just a decision A versus decision B. Decision A may set you on one path, and decision B will set you on a slightly different path. It's just which reality do you want to live in?

Henry: (55:32)
It's trade-offs.

Jory: (55:34)
Yeah, it's trade-offs, exactly. The technical interoperability problem, that's not really that... It is hard, but it's not that hard compared to-

Henry: (55:46)
Well, in some sense it's the easiest part, because people are harder.

Jory: (55:51)
Exactly. People are the hardest part of software. The way I have been thinking about this for a while now is like, how can we solve the human interoperability problem, which will help improve a lot of our technical interoperability problems? One of the things that I've been active in lately is TC39's code of conduct group, and other codes of conduct groups. To me, those aren't about seeking out bad behavior and punishing them.

Jory: (56:38)
Rather, how can we create environments where people feel like they can come and give their best selves to that committee, and produce work that they feel good about it in a way that they feel good about. That sort of creates something more of a positive cycle, a virtuous cycle of technical production. We think about it at TC39 in our code of conduct group as something of a culture shift activity. The older school standards bodies and the technical committees have been around for a long time, and the TC39 has been around for 20 plus years. That's a long time.

Jory: (57:30)
They have a little bit of this like, forgive me, but it's a little bit like the gray hair problem that a lot of our younger participants kind of want to change a little bit. We want to feel fresher, more responsive, more open to healthy debate, as opposed to kind of maybe the older school thinking around some person at a lectern preaching for hours. That's part of this shift. I think it's something that has happened not just within the standards, but certainly within a broader culture.

Henry: (58:18)
Yeah, a broader culture.

Jory: (58:18)
Yeah.

Henry: (58:18)
Yeah, I mean even like at the meetings, now they have mics, and there's like a whole queuing system with the-

Jory: (58:25)
Oh, gosh.

Henry: (58:26)
Versus before, I guess people were raising their hands before, but even before that, you just talk, and you just argue, and then kind of wade through it. Shout over each other kind of thing.

Jory: (58:35)
Yeah. It is night and day difference. I wasn't even, I didn't even go to all that many meetings, but even just in the last two years since I've been going a lot more regularly, it just feels like it's a little different, it's a little better. It gets better and better each time, I think. But I think I'm noticing that people are more considerate, they're more measured. I hear the words "Thank you" way more than I ever heard before.

Jory: (59:15)
I do think some of the tools that we've brought in, [Brian Charleston's 00:59:19] TCQ app. Those are all little techniques, so I'm hoping that we can bring in more, I don't want to call it sociological tricks, but they're little behavioral dynamic changes that we can make to make the work of the committee just make everybody feel better.

Henry: (59:44)
Yeah, you're not like purposely trying to make things emotional or anything. At the same time, we were talking about this earlier with the whole feeling that science, people wanting to be objective with the standards, it's all about the technical. It's like, you have to remember we're all human, and we interact. The whole thing of saying thank you.

Henry: (01:00:01)
The same in Open Source, when people [inaudible 01:00:04], you can still say that first, even if you have some kind of [inaudible 01:00:07]. "Thank you for your input," whatever it is. They forget that it's not that you don't care about technical, but... I feel like it's really hard for us to say, and. It's like technical, and this other thing. We always want to create this dichotomy between the technical and non-technical. How do we think through the complexity of the holistic view of both at the same time?

Jory: (01:00:33)
Yeah. There's a certain science to it. We're not trying to make anything more emotional. That's actually far from the case. It's more like, can we help people feel more positively generally happier about the work that they're doing? They're more likely to do better work in the committee if they feel happy about it. You don't do your best work when you're miserable. I mean that's true, so how can we change that?

Jory: (01:01:12)
How do we do that by giving people good techniques and tools? How do we do that by finding good, even just like training classes for people who, maybe they're fantastic technologists, but they aren't good at running meetings. Well, let's look at what it takes to run a good meeting. Let's do a quick 45 minute lesson on running effective meetings, that kind of stuff, just to help them be the best version of themselves they can be.

Henry: (01:01:44)
Yeah, no I feel like that is lacking in Open Source too. Everyone gets into it because of the code and commits, and graphs and stuff. Then when you become [inaudible 01:01:57], and you realize you are lacking in every other way. Those other things somehow end up being, well it feels more important because you're lacking them. You realize, oh, I don't know how to set up a meeting. Do we need it? How do you make releases, and how do you talk to people, and sales and networking, and all these aspects that are like, I guess it feels like a company or standards, a community. All these other things that, they're all tying back to code, but you don't learn them in school or anything, like people stuff.

Jory: (01:02:31)
Yeah. Well, that for me is the more interesting part. I don't say this too often, but most of the time I don't, I care about the technical outcome, yes, but I kind of by way of example, I say, "I don't really care about that." There are a lot of smart people, a lot of people who are a lot smarter than me about these technologies. I will leave them to make the best technical decision. My job, the whole think that I will emphasize is, how can I support those people to be the best, feel the best, have the best support they can, the tools and resources around them so that they feel equipped and good.

Henry: (01:03:18)
I think this is a good place to stop. I guess just to end, if people want to reach out to you or want to hear about what you're working on, or I guess what are you working on now?

Jory: (01:03:32)
Yeah. I'm working on the OASIS Open Projects program, which is a new program for open source projects or technical committees to work in the same sort of organizational umbrella and under the same system to produce a formal de jure, like that's official, standard, as well as different open source efforts. If you want to talk more about open source and open standards and that bridge, or if you want to talk about just general sort of leadership and communication for these kinds of communities, I am here to help at @jorydotcom.

Henry: (01:04:19)
On Twitter.

Jory: (01:04:19)
On Twitter, and GitHub, and Slack, and IRC, and Signal, and WhatsApp, or whatever.

Henry: (01:04:27)
Okay, awesome. Thanks for joining me today.

Jory: (01:04:31)
Of course. Always a pleasure.
