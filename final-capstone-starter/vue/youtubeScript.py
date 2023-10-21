from youtube_transcript_api import YouTubeTranscriptApi

# Replace 'video_id' with the actual YouTube video ID
video_id = 'your_video_id_here'

# Get the transcript for the video
transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
transcript = transcript_list.find_transcript(['en'])  # You can specify preferred languages

# Fetch the actual transcript data
transcript_text = transcript.fetch()

# Now you can analyze 'transcript_text' using OpenAI or other tools
print(transcript_text)
