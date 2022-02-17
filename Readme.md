# Problem
# Given a GitHub username, write a script to find the unique languages 
# used across the user's open source repositories, along with a count 
# of how many times each language occurs.  The languages along with their 
# counts should be written to stdout, one per line.
#
# 👉For testing this exercise, please use the awslabs GitHub account, 
# which has a large number of interesting open source repos.
#
# Requirements
#    - Please write this assignment in Javascript or Typescript.
#    - Use any general HTTP client or library rather 
#      than a GitHub-specific client library
#      i.e. using Requests is fine, but using PyGithub is not
#           http://docs.python-requests.org/en/master/
#    - The language and repository count on each line of output
#      must be comma-separated
#    - Any error or informational output must not 
#      be written to stdout
#
# Tips
#    - The relevant API endpoint to use, as documented here
#      (https://developer.github.com/v3/repos/#list-user-repositories), 
#      is:
#      https://api.github.com/users/{username}/repos
#    - No authentication is required to use that API endpoint 
#      for this exercise