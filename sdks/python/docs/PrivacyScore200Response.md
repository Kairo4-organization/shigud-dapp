# PrivacyScore200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**PrivacyScore200ResponseData**](PrivacyScore200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.privacy_score200_response import PrivacyScore200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PrivacyScore200Response from a JSON string
privacy_score200_response_instance = PrivacyScore200Response.from_json(json)
# print the JSON string representation of the object
print(PrivacyScore200Response.to_json())

# convert the object into a dict
privacy_score200_response_dict = privacy_score200_response_instance.to_dict()
# create an instance of PrivacyScore200Response from a dict
privacy_score200_response_from_dict = PrivacyScore200Response.from_dict(privacy_score200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


