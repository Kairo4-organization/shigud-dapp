# PrivacyScoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Base58-encoded Solana public key | 
**limit** | **int** | Number of recent transactions to analyze | [optional] [default to 100]

## Example

```python
from sipher_client.models.privacy_score_request import PrivacyScoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PrivacyScoreRequest from a JSON string
privacy_score_request_instance = PrivacyScoreRequest.from_json(json)
# print the JSON string representation of the object
print(PrivacyScoreRequest.to_json())

# convert the object into a dict
privacy_score_request_dict = privacy_score_request_instance.to_dict()
# create an instance of PrivacyScoreRequest from a dict
privacy_score_request_from_dict = PrivacyScoreRequest.from_dict(privacy_score_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


